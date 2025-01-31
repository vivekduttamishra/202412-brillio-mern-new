const {MongooseRepository} = require('ca-webutils')

class MongooseUserRepository extends MongooseRepository {
    constructor(model){
        super(model);
        console.log('model',model.constructor.name);
        
    }
}

MongooseUserRepository._dependencies =['user']

module.exports = MongooseUserRepository;
