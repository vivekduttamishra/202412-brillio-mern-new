const express = require('express');
const authorRoutes = require('./routes/author.route')

const path = require('path');
const fs = require('fs');
const {jwt} = require('ca-webutils')
const cors = require('cors');

process.env.AUTH_SERVER_PUBLIC_KEY = fs.readFileSync(path.join(process.cwd(),'auth_server.public.key'),'utf-8')


async function createApp(){

    const app = express();
    app.use(express.static(path.join(process.cwd(), 'public')))
    app.use(jwt.tokenDecorder(process.env.AUTH_SERVER_PUBLIC_KEY,{algorithms: ['RS256']}));
    app.use(express.json());
    app.use(cors());
    

    // app.use((request,response,next)=>{
    //     console.log('request.user',request.user);
    //     console.log('request.tokenError',request.tokenError);
    //     if(!request.tokenError)
    //         request.tokenError = new Error('Invalid Token');

    //     next();
    // })

    app.use('/api/authors/', authorRoutes());

    return app;
}

module.exports = createApp;