const express = require('express');
const userRoutes = require('./routes/user.route')
const path = require('path');
const fs = require('fs');
const { decodeTokenMiddleware } = require('./services/jwt');

const public_key = fs.readFileSync(path.join(process.cwd(), 'jwt.public'), 'utf8');


async function createApp(){

    const app = express();
    app.use(express.json());
    app.use(express.static(path.join(process.cwd(), 'public')))

    app.use(decodeTokenMiddleware(public_key, {algorithms: ['RS256']}));

    // app.use((request,response,next)=>{
    //     console.log('request.user', request.user);   
    //     console.log('request.tokenError',request.tokenError?.message);
        
    //     next();
    // })

    app.use('/api/users/', userRoutes());

    return app;
}

module.exports = createApp;