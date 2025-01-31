const {MongooseRepository} = require('ca-webutils');


class MongooseAuthorRepository extends MongooseRepository {

        constructor(model){
           // console.log('Author model',model)
            super(model);
        }
}

MongooseAuthorRepository._dependencies = ["author"];

module.exports = MongooseAuthorRepository;