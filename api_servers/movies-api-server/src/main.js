const {httpx} = require('ca-webutils')
const mongoose = require('mongoose');
require('./config')

const app = require('./app');

httpx.runApp({protocol:'https',
    requestHandler:app,

    initializer: async()=>{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('connected to database server')
    }

});