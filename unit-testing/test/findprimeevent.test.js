const {expect,assert}= require('chai')
const {findPrimeRange} = require('../src/math/primeasync')


describe('prime async', () => {
    describe('findPrimeRange', () => {

        it('should emit 25 primes under 100',(done)=>{
            //let primes=[];
            let primes=0;

            findPrimeRange(0,100)
             .on('prime', (r) => {
                primes++;
             })
             .on('done', ()=>{
                expect(primes).to.equal(25) //works fine. doesn't time out
                done();
             });
        })
 

        it('should emit 2,3,5,7 as primes under 10',(done)=>{
            const expectedResult = [2,3,5,7]
            let primes=[];

            findPrimeRange(0,10)
             .on('prime', (r) => {
                 primes.push(r.prime)
             })
             .on('done', ()=>{
                expect(primes).to.deep.equal(expectedResult)
                done();
             });
        })

        it('should fail for invalid range',(done)=>{

            findPrimeRange(10,1)
                .on('error', e=>{
                    expect(e.message).to.match(/invalid range/i)
                    done();
                })

        })

        it('should find all primes under 5000',(done)=>{
            let primes=0;
            findPrimeRange(0,5000)
                .on('prime', r=> primes++)
                .on('done', ()=>{
                    expect(primes).to.be.equal(669)
                    done();
                })
        })


    })
})