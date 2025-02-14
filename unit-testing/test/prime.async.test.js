const { findPrimesCallback } = require('../src/math/prime')
const { expect, should } = require('chai')
should();


describe('primes', () => {
    describe('findPrimesCallback', () => {

        it('shuld return 4 primes under 10',(done)=>{

            const primes = findPrimesCallback(0,10, (error,primes)=>{

                expect(error).to.equal(null)
                primes.should.have.length(4)
                done()//done.
            });
           


        });

        it('should return error for inavalid range',(done)=>{

            findPrimesCallback(10,1, (error)=>{
                expect(error).to.not.equal(null)
                expect(error.message).to.contains('Invalid Range')
                done();
            })

        })



    })
})