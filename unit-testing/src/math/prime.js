function isPrime(n){
    if(n<2)
        return false;

    for(let i=2;i<n;i++)
        if(n%i==0)
            return false;
        // else
        //     return true;
    return true
}

function findPrimes(min,max){
    let primes = [];
    for(let i=min;i<=max;i++){
        if(isPrime(i))
            primes.push(i);
    }
    return primes;
}

const findPrimesCallback=( min,max, callback)=>{

    let primes=[];
    let count=min;
    
    let iid= setInterval(()=>{

        if(max<=min){
            clearInterval(iid);
            return callback(new Error(`Invalid Range ${min}-${max}`))
        }


        while(count<max){
            if(isPrime(count))
                primes.push(count);
            count++;
            if(count%1000===0)
                break;
        }

        if(count===max){
            clearInterval(iid);
            return callback(null,primes);
        }

    },100);


}


module.exports={
    isPrime,
    findPrimes,
    findPrimesCallback
}