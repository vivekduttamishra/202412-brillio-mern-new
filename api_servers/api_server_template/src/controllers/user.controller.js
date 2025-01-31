const {injector} = require('ca-webutils')


const userController = ()=>{
    
    const userService = injector.getService('userService');
    
    const getAllUsers = ()=> userService.getAllUsers();
    
    const getUserById = ({id})=> userService.getUserById(id);
    
    const registerUser = ({body})=> userService.register(body);
    
    const login = ({body})=> userService.login(body);

    return {
        getAllUsers,
        getUserById,
        registerUser,
        login,
    }
}

module.exports = userController;

