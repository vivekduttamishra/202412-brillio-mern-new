

//delay

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


export const delayed= async( time, fn)=>{
    await delay(time);
    return fn();
}