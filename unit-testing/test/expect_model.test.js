class TestObject{
    constructor(subject){
        this.subject = subject;
        
    }

    equals(expected) {
        if(this.subject !== expected) 
            throw new Error(`Expected: ${expected}, but got: ${this.subject}`);
        return this;
    }

    doesNotExist(){
        if(this.subject)
            throw new Error(`Expected object to be null/undefined, but got: ${this.subject}`);
        return this;
    }
}

const assert = (actual) => {
 
    return new TestObject(actual)    
 }

 const must=()=>{

    function equal(expected){
        if(this!==expected)
            throw new Error(`Expected: ${expected}, but got: ${this}`);
        return this;
    }

    function lengthEqual(expectedLength){
       
        if(this.length!==expectedLength)
            throw new Error(`Expected array to have length ${expectedLength}, but got: ${this.length}`)
        return this;
    }

    function isEmpty(){
        if(this.length>0)
            throw new Error(`Expected array to be empty, but got: ${this.length}`)
        return this;
    }

    function doesNotExist(){
        if(!this)
            throw new Error(`Expected a valid value: got ${this}`)
        return this;
    }

    Object.prototype.shouldBeEqual=equal;
    Object.prototype.shouldNotExist=doesNotExist;
    Array.prototype.shouldHaveLength=lengthEqual;
    Array.prototype.shouldBeEmpty=isEmpty;


 }

 must();

describe('understand expect and should',()=>{
    let array=[2,3,9,5,8];

    describe('assert',()=>{
    
        it('should equate existing values',()=>{
           let result =  array.filter(n=>n%2===0)
           assert(result.length).equals(2)    
        })
    
        it('should check for non-existing values',()=>{
            let result = array.find(n=>n>10)
            assert(result).doesNotExist()
        })
    })
    
    
    describe('must',()=>{
        it('should equate extisting values',()=>{
           let evens = array.filter(n=>n%2===0)
           
           evens.shouldHaveLength(2)
        })

        it('should return empty array for non-existing values',()=>{

            let negative = array.filter(n=>n<0)

            negative.shouldBeEmpty()

        })

        it('should return undefined for non-existing values',()=>{

            let negative = array.find(n=>n<0)

            //negative.shouldNotExist()
            assert(negative).doesNotExist();

        })
    })
})


