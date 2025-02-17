const { findPrimesCallback } = require('../src/math/prime')
const { expect, should } = require('chai')
should();




describe('primes', () => {
    describe('findPrimesCallback', () => {

        it('should find all primes under 100', (done)=>{

            findPrimesCallback(0,100, (error,primes)=>{
                //expect(primes.length).to.equal(25);
                expect(primes).have.length(25);
                done(); //task completed.
            });
        })

        xit('should find primes under 100,000', (done)=>{

            findPrimesCallback(0,100000, (error,primes)=>{
                //expect(primes.length).to.equal(25);
                expect(primes).have.length(9592);
                done(); //task completed.
            });
        })
    })
})