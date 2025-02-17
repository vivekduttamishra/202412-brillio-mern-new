const asyncAssert = (done, fn) => {

    return (...params)=>{
        try{
            fn(...params);
            done();
        }catch(error){
            done(error);
        }
    }
}


module.exports = {
    asyncAssert
}