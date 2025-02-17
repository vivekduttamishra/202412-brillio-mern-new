require('../src/utils')
const {expect,should}=require('chai');
const sinon = require('sinon');

describe('Array.conditionalMap',()=>{

    const array=[1,2,3,4,5,6,7,8,9,10];

    describe('using manual fake',()=>{

        it('should double all even numbers',()=>{
            let result = array.conditionalMap(n=>n%2===0, n=>n*2);

            expect(result).to.deep.equal([4,8,12,16,20]);
        })

        it('should call mapper only filtered values',()=>{
            let filterLogic = n=>n%2===0;
            let callcount=0;
            let mapperLogic= n =>{
                callcount++;
                return n;
            }
            array.conditionalMap(filterLogic, mapperLogic);
            expect(callcount).to.equal( array.filter(filterLogic).length);

        })

    });

    describe('using sion.fake',()=>{

        it('should call mapper only filtered values',()=>{
            let filter = n=>n%2===0;
            let mapper = sinon.fake();

            array.conditionalMap(filter, mapper);

            expect(mapper.callCount).to.equal(5);
        })

        it('should use filter to get all value',()=>{
            let filter = sinon.fake.returns(true);

            let mapper = (x)=>x

            let result = array.conditionalMap(filter, mapper);
            expect(result).to.deep.equal(array);
        })

    });


})

