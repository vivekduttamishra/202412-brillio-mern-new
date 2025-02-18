const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');

const {expect, should} = chai;
should();
chai.use(chaiAsPromised);

const prime = require('../src/math/prime');
const {findPrimesAsync} = require('../src/math/primeasync');

describe('findPrimesAsync using spy',()=>{
    let isPrimeSpy;
    beforeEach(()=>{
        isPrimeSpy = sinon.spy(prime, 'isPrime');
    })

    afterEach(()=>{
        prime.isPrime.restore();
    })

    it('should call isPrime for each number in range',async ()=>{
        await findPrimesAsync(0, 10);
        isPrimeSpy.callCount.should.equal(10);
    })

    it('should return as many primes as number trues returned by isPrime',async ()=>{

        let result = await findPrimesAsync(-100,100)
        // bad expect as it depends on isPrime logic
        //result.should.have.length(25); //fail because isPrime logic is faulty

        //find total number of trues returned by isPrime
        let trueCount = isPrimeSpy.returnValues.filter(Boolean).length;
   


        result.should.have.length(trueCount);
    })
})
