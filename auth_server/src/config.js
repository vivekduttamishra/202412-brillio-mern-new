const { injector,expressx } = require('ca-webutils')

const User = require('./repositories/mongoose/models/user.model')
const MongooseUserRepository = require('./repositories/mongoose/user.repository');
const UserService = require('./services/user.service');

//console.log('User',User);


injector
    .addServiceObject('user', User)
    .addService('userRepository', MongooseUserRepository)
    .addService('userService', UserService)

//console.log('injector.container',injector.container);

        
expressx.addCustomError('MongoServerError',400);