const { findPrimesAsync } = require('../src/math/primeasync');

const chai = require('chai');
const { should, expect, assert } = chai;

const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);



const { asyncAssert } = require('../src//test-utils');

should();


describe('prime async', () => {
    describe('findPrimeAsync', () => {

        describe('using done callback', () => {

            it('should find 25 primes under 100', (done) => {

                findPrimesAsync(0, 100)
                    .then(primes => {
                        try {

                            expect(primes).to.have.length(25)
                            done();
                        } catch (error) {
                            done(error); //indicate failure
                        }
                    })
            })


            it('should find 2,3,5,7 as primes under 10', (done) => {

                const expectedPrimes = [2, 3, 5, 7];

                findPrimesAsync(0, 10)
                    .then(asyncAssert(done, primes => {
                        primes.should.deep.equal(expectedPrimes)
                        primes.should.have.length(4)
                    }));

            })




            it('should fail to find primes in invalid range', (done) => {
                findPrimesAsync(100, 0)
                    .then(asyncAssert(done, () => {
                        assert.fail("Didn't get promise rejection");
                    }))
                    .catch(asyncAssert(done, error => {
                        error.message.should.match(/invalid range/i);
                    }))
            })

        })


        describe('using promise return', () => {

            it('should return 25 primes under 100 ', () => { //no done passed

                return findPrimesAsync(0, 100)
                            .then(primes => expect(primes).to.have.length(25))

            })

            it('shuould reject for invalid range',()=>{
                return findPrimesAsync(100, 0)
                        .then(e=> assert.fail("Didn't get promise rejection"))
                        .catch(e=> expect(e.message).to.match(/invalid range/i)  )
            })

        })

        describe('using async-await', () => {

            it('should return 25 primes under 100 ', async() => { //no done passed

                let primes = await  findPrimesAsync(0, 100)
                expect(primes).to.have.length(25)

            })

            it('shuould reject for invalid range',async ()=>{
                try{
                    await findPrimesAsync(100, 0)
                    assert.fail("Didn't get promise rejection")
                }catch(e){
                    expect(e.message).to.match(/invalid range/i)
                }
            })

        })

        describe('using chai-as-promised', () => {

            it('should return 25 primes under 100 ', async() => { //no done passed
                
                await expect(findPrimesAsync(0, 100)).to.eventually.have.length(25)

            })

            it('shuould reject for invalid range',async ()=>{
               await expect(findPrimesAsync(100, 0)).to.be.rejectedWith(/invalid range/i)
            })

        })



    })
})

