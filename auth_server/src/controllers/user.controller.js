const {injector} = require('ca-webutils')


const userController = ()=>{
    
    const userService = injector.getService('userService');
    
    const getAllUsers = ()=> userService.getAllUsers();
   
//
//PATCH /api/users/:email/activate
//{active:true}

    const activateUser= (({body,email})=> userService.activateUser(email, body.active))

    const registerUser = ({body})=> userService.register(body);
    
    const login = ({body})=> userService.login(body);

    return {
        getAllUsers,
        registerUser,
        login,
        activateUser,
    }
}

module.exports = userController;

