

Array.prototype.conditionalMap = function(predicate, mapper){
    let result=[]
    for(let value of this){
        if(predicate(value)){
            result.push(mapper(value))
        }
    }

    return result;
}