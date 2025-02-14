const {isPrime,findPrimes} = require('../src/math/prime')
const assert = require('assert')


//test helper


it('should return true for 2',()=>{
    
    const result = isPrime(2);
    assert.equal(true,result)
})

it('should return false for 15',()=>{
    
    const result = isPrime(15);
    assert.equal(false, result); 
    
})

it('should return 4 primes under 10',()=>{
    const result = findPrimes(0,10);
    assert.equal(result.length,4);
})

