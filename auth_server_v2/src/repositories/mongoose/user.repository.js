const {MongooseRepository} = require('ca-webutils')

class MongooseUserRepository extends MongooseRepository {
    constructor(model){
        super(model);
        //console.log('model',model.constructor.name);
        
    }

    async getById(email){
        let user= await this.model.findOne({email});
        if(!user)
            throw new NotFoundError(`User with email ${email} not found`);
        return user;
    }
}

MongooseUserRepository._dependencies =['user']

module.exports = MongooseUserRepository;
