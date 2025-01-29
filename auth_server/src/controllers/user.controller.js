const {injector} = require('ca-webutils');
const { AuthenticationError } = require('ca-webutils/errors');
const fs = require('fs');

const path = require('path');
const private_key = fs.readFileSync(path.join(process.cwd(),'private_key.pem'),'utf8');


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

       //CREATE JWT TOKEN USING PRIVATE KEY




       let token = await jwt.createToken(user,private_key,{algorithms: ['RS256']});

       return {token,user}

    }
    
    // const currentUserInfo = async ({request})=>{
    //     try{
    //         //get authorization header from request
    //         //console.log('request.headers',request.headers);
            
    //         //let authorizationHeader = request.headers.AuthorizationHeader
    //         let authorizationHeader = request.headers['authorization']
    //         console.log('authorization',authorizationHeader);
             
    //         if(!authorizationHeader) throw new AuthenticationError('No Authorization header Found');
    //         let token =authorizationHeader.split(' ')[1]; //first is BEARER
    //         if(!token) throw new AuthenticationError('Missing Token');
    //         let data = await jwt.decode(token)
    //         return data;
    //     }catch(error){
    //         if(error instanceof AuthenticationError)
    //             throw error;
    //         else
    //             throw new AuthenticationError('Not Logged In or Invalid Token',error);
    //     }
    // }


    // const currentUserInfo = async ({request})=>{
    //     let {user, tokenError} = request;
    //     if(user)
    //         return user;
    //     else
    //         throw tokenError;
    // }
    
    
    const currentUserInfo = async ({request})=>{        
        return request.user;
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

