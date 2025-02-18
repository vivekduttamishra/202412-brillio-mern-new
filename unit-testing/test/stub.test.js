const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');

const {expect, should} = chai;
should();
chai.use(chaiAsPromised);

const prime = require('../src/math/prime');
const {findPrimesAsync} = require('../src/math/primeasync');

describe('findPrimesAsync using stub',()=>{
    let isPrimeStub;
    beforeEach(()=>{
       // isPrimeSpy = sinon.stub(prime, 'isPrime');
    })

    afterEach(()=>{
        //isPrimeStub.restore();
        prime.isPrime.restore();
    })

    it('should be called for each number in range',async()=>{
        isPrimeStub = sinon.stub(prime, 'isPrime')

        let result = await findPrimesAsync(0, 10);
        isPrimeStub.callCount.should.equal(10);
        let trueCounts = isPrimeStub.returnValues.filter(Boolean).length;

        result.should.have.length(trueCounts);
        

    })

    it('should return true for each call',async ()=>{
        
        isPrimeStub= sinon.stub(prime, 'isPrime').returns(true);
        let result = await findPrimesAsync(0, 10);
        isPrimeStub.callCount.should.equal(10);
        result.should.have.length(10);

    })

    it('should return fake values for isPrime',async ()=>{

        let fakePrimes = [2,20,40,60,150];

        //stup isPrime with a custom logic
        isPrimeStub = sinon
                        .stub(prime, 'isPrime')
                        .callsFake((n) => fakePrimes.includes(n));

        let result = await findPrimesAsync(0,100)
       
        result.should.deep.equal([2,20,40,60]);
    })
})
