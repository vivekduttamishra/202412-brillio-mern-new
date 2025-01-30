const express = require('express');
const {injector,expressx,jwt} = require('ca-webutils')
const createAuthorController = require('../controllers/author.controller');
const {routeHandler} = expressx;


const createRoute = ()=>{
    const router = express.Router();
    const controller = createAuthorController();    
    const {authenticate,authorize}=jwt;


    router
        .route("/")
        .get(routeHandler(controller.getAllAuthors))
        .post(authenticate,routeHandler(controller.createAuthor))

    router
        .route("/:id")
        .get(routeHandler(controller.getAuthorById))
        .delete(authorize('admin'),routeHandler(controller.deleteAuthorById));


    return router;
}

module.exports = createRoute; 