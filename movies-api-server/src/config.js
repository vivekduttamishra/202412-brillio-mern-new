const { injector } = require('ca-webutils')

const Movie = require('./repositories/models/movie.model')
const MovieRepository = require('./repositories/movie.repository')
const MovieService = require('./services/movie.service');



injector
    .addServiceObject('movie', Movie)
    .addService('movieRepository', MovieRepository)
    .addService('movieService', MovieService)
