let jwt = require('jsonwebtoken');

let expiry = Number( process.JWT_EXPIRY ||  60*5)

//typcial jwt payload
const payload={
    iss: process.env.JWT_ISSUER,
    //sub: user._id,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) +  expiry // 1 hour
    //aud   
};

async function createToken(claims, key,options={}){
    claims = {...payload, claims, sub:claims.email} //this data should be encrypted and bundeled
    
    key = key || process.env.JWT_SECRET

    
    
    
    return jwt.sign(claims, key || process.env.JWT_SECRET, options);
}

async function decode( token, key, options={}){
    key = key || process.env.JWT_SECRET
    return new Promise((resolve,reject)=>{
        
        jwt.verify(token, key, options, (error,data)=>{
            if(error){
                return reject(error)
            }else{

                return resolve(data)
            }
        })
    });
    
}



module.exports={
    createToken,
    decode
}