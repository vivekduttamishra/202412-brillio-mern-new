const {isPrime} = require('../src/math/prime')



it('should return true for 2',()=>{
    
    const result = isPrime(2);
    if(result===false)
        throw new Error('returned false instead of true')
})

it('should return false for 15',()=>{
    
    const result = isPrime(15);

    if(result===true)
        throw new Error('returned true instead of false')
    
})

