const {isPrime,findPrimes} = require('../src/math/prime')



//test helper
const expectEqual=(expected,actual, message)=>{
    if(expected!==actual){
        message= message || `\nexpected: ${expected}\nfound: ${actual}`
        throw new Error(message)
    }
}


it('should return true for 2',()=>{
    
    const result = isPrime(2);
    expectEqual(result, true);
})

it('should return false for 15',()=>{
    
    const result = isPrime(15);
    expectEqual(result, false); 
    
})

it('should return 4 primes under 10',()=>{
    const result = findPrimes(0,10);
    expectEqual(4,  result.length);
})

