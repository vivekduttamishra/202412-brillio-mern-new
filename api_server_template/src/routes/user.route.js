const express= require('express');
const {expressx} = require('ca-webutils');
const userController = require('../controllers/user.controller')


const createRouter = ()=>{

    const router = express.Router();
    
    let {routeHandler}=expressx;
    
    let controller = userController();
        
    router
        .route('/')
        .get(routeHandler(controller.getAllUsers))
        .post(routeHandler(controller.registerUser))
       
    router
        .route('/signin')
        .post(routeHandler(controller.login));


    return router;

}


module.exports= createRouter;