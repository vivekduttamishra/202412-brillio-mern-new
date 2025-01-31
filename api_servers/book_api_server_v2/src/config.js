const { injector,jwt } = require('ca-webutils')



const Author = require('./repositories/mongoose/models/author.model');
const MongooseAuthorRepository = require('./repositories/mongoose/mongoose-author.repository');
const AuthorService = require('./services/author.service');



injector
    .addServiceObject('jwt',jwt)
    .addServiceObject('author', Author)
    .addService('authorRepository', MongooseAuthorRepository)
    .addService('authorService', AuthorService)
    
//console.log('injector.container',injector.container);
