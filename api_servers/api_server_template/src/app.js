const express = require('express');
const userRoutes = require('./routes/user.route')

const path = require('path');


async function createApp(){

    const app = express();
    app.use(express.json());
    app.use(express.static(path.join(process.cwd(), 'public')))

    app.use('/api/users/', userRoutes());

    return app;
}

module.exports = createApp;