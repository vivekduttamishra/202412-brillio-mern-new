const prime = require('./prime')
const EventEmitter = require('events')

const findPrimeRange=( min,max, )=>{

    let primes=[];
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

module.exports={findPrimeRange}