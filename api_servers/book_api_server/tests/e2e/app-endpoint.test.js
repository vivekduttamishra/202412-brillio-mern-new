require('dotenv').config()
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const supertest = require('supertest')
require('./injector_config_test')
const app = require('../../src/app')  //this is what we will test
const db = require('./test_connect');
const injector = require('../../src/utils/injector')

chai.use(chaiAsPromised)
const { expect, should } = chai;
should();


const authors = [
    {
        "id": "gandhi",
        "name": "Mahatma Gandhi",
        "biography": "The Father of the nation, freedom fighter, social reformer and acknolwedged greatest man of the century",
        tags: ["politics", "social revolution"]
    },
    {
        "id": "nehru",
        "name": "Jawahar Lal Nehru",
        "biography": "The first Prime Minister of India and the best seller author of The Discovery of India, and Glimpses of World Hisotry",
        tags: ["politics", "India", "Prime Minister"]
    }

]

describe('BookApiApp', () => {

    before(async () => {
        await db.connect();
    })

    after(() => {
        db.disconnect();
    })

    beforeEach(async () => {
        //dele
        let Author = injector.getService('author')
        //delete all authors from Author model
        await Author.deleteMany({})
        //insert test authors
        await Author.insertMany(authors)
    })
    let testServer;
    beforeEach(async () => {
        //testServer = supertest(app);
    })

    describe('Get /authors', () => {
        it('should return all authors', async () => {
            supertest(app)
                .get('/authors')
                .expect(200)
                // .then(response => {
                //     response.body.should.deep.equal(authors);
                // })


        })
    })



})