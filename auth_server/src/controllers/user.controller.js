const {injector} = require('ca-webutils');
const { AuthenticationError } = require('ca-webutils/errors');


const userController = ()=>{
    
    const userService = injector.getService('userService');
    const jwt = injector.getService('jwt');
    
    const getAllUsers = ()=> userService.getAllUsers();
   
//
//PATCH /api/users/:email/activate
//{active:true}

    const activateUser= (({body,email})=> userService.activateUser(email, body.active))

    const registerUser = ({body})=> userService.register(body);
    
    const login = async ({body})=>{

        let user = await userService.login(body);

       let token = await jwt.createToken(user);

       return {token,user}

    }
    
    const currentUserInfo = async ({request})=>{
        try{
            //get authorization header from request
            //console.log('request.headers',request.headers);
            
            //let authorizationHeader = request.headers.AuthorizationHeader
            let authorizationHeader = request.headers['authorization']
            console.log('authorization',authorizationHeader);
             
            if(!authorizationHeader) throw new AuthenticationError('No Authorization header Found');
            let token =authorizationHeader.split(' ')[1]; //first is BEARER
            if(!token) throw new AuthenticationError('Missing Token');
            let data = await jwt.decode(token)
            return data;
        }catch(error){
            if(error instanceof AuthenticationError)
                throw error;
            else
                throw new AuthenticationError('Not Logged In or Invalid Token',error);
        }
    }


    return {
        getAllUsers,
        registerUser,
        login,
        activateUser,
        currentUserInfo,
    }
}

module.exports = userController;

