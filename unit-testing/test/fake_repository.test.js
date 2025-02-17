const {Bank, InvalidAccountError, InvalidAmountError} = require('../src/finance/Bank');
const sinon = require('sinon');
const {expect } = require('chai');


describe('Bank', ()=>{
    let bank;
    let repository;
    const balance=5000;
    const password="p@ss"
    let account={id:1, balance,password};

    beforeEach(()=>{
        repository={
            getById: sinon.fake.returns(Promise.resolve(account)),
            update: sinon.fake(),
            
        }
        bank = new Bank(repository);
    })

    describe('withdraw', ()=>{
        it('should not call repository.getAccountById for negative amount', async ()=>{
            

            await expect( bank.withdraw(account.id, -1, password)).to.be.rejectedWith(InvalidAmountError);

            expect(repository.getById.callCount).to.equal(0);
            expect(repository.update.callCount).to.equal(0);

        })

        it('should call repository.getAccountById once but not update for invalid credential', async ()=>{
            await expect( bank.withdraw(account.id, 1000, "wrong_password")).to.be.rejectedWith(InvalidAccountError);

            expect(repository.getById.callCount).to.equal(1);
            expect(repository.update.callCount).to.equal(0);
        })
    })
})