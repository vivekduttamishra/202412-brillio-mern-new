const { isPrime, findPrimes } = require('../src/math/prime')
const assert = require('assert')
const { expect, should } = require('chai')

should(); //this enables should functionality

describe('primes module', () => {
    describe('isPrime', () => {

        it('should return true for 2', () => {

            const result = isPrime(2);
            //assert.equal(true,result)

            expect(result).to.equal(true);
        })

        it('should return false for 15', () => {

            // const result = isPrime(15);
            // assert.equal(false, result); F

            expect(isPrime(15)).to.equal(false);

        })

        it('should return false for all numbers<2',()=>{
            isPrime(1).should.equal(false);
            isPrime(-1).should.equal(false);
            isPrime(0).should.equal(false);
            isPrime(-11).should.equal(false);
        })

    })

    describe('findPrimes', () => {

        it('should return 4 primes under 10', () => {
            // const result = findPrimes(0,10);
            // assert.equal(result.length,4);

            expect(findPrimes(0, 10)).to.have.length(4);
        })

        it('should have 25 primes under 100', () => {

            findPrimes(0, 100).should.be.instanceOf(Array).and.have.length(25)

        })
    })
})






