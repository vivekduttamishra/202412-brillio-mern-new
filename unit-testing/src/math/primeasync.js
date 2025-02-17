const prime = require('./prime')
const EventEmitter = require('events')

const findPrimeRange=( min,max, )=>{

    let count=min;
    let index=0;

    const event = new EventEmitter();
    
    let iid= setInterval(()=>{

        if(max<=min){
            clearInterval(iid);
            return event.emit("error",new Error(`Invalid Range ${min}-${max}`))
        }


        while(count<max){
            if(prime.isPrime(count)){
                index++;
                event.emit("prime",{index,prime: count });
            }
            count++;
            if(count%1000===0)
                break;
        }

        if(count===max){
            clearInterval(iid);
            //return callback(null,primes);
            event.emit("done");
        }

    },100);


    return event;
}


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// const _findPrimesAsync = (min,max)=>{

//     let primes=[];
//     let count=min;
//     let index=0;

//     //const event = new EventEmitter();

//     const promise = new Promise((resolve,reject)=>{
//         let iid= setInterval(()=>{

//             if(max<=min){
//                 clearInterval(iid);
//                 return reject(new Error(`Invalid Range ${min}-${max}`))
//             }
    
    
//             while(count<max){
//                 if(prime.isPrime(count)){
//                     primes.push(count);
//                 }
//                 count++;
//                 if(count%1000===0)
//                     break;
//             }
    
//             if(count===max){
//                 clearInterval(iid);
//                 resolve(primes);
//             }
    
//         },100);
    
//     })
    
   

//     return promise;
// }

const findPrimesAsync = async (min,max)=>{

    const primes = [];

    if(min>=max)
        throw new Error(`Invalid Range ${min}-${max}`);

    for(let i=min;i<max;i++){
        if(prime.isPrime(i)){
            primes.push(i);
        }

        if(i%1000===0)
            await delay(100);
    }

    return primes;
}


module.exports={findPrimeRange,findPrimesAsync}