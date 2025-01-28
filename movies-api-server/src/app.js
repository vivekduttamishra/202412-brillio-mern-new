const express = require('express');


const app = express();
const movieRoute = require('./routes/movie.route')


app.use(express.json());

app.use('/api/movies/', movieRoute);

module.exports = app;