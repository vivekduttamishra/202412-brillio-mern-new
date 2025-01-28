

const express= require('express');

const router = express.Router();

const {injector, expressx} = require('ca-webutils');

let {routeHandler}=expressx;

const service = ()=> injector.getService('movieService');


router
    .route('/')
    .get(routeHandler(()=>service().getMovies()))
    .post(routeHandler(({body})=>service().addMovie(body)))


router
    .route('/:id')
    .get(routeHandler(({id}) => service().getMovieById(id)));


module.exports= router;