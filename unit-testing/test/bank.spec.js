const {Bank,InvalidAccountError,InvalidAmountError} = require('../src/finance/Bank');
const { expect } = require('chai');


describe('Bank', () => {
    const password = "p@ss"
    const amount = 5000;
    let bank;

    beforeEach(()=>{
        bank = new Bank();
    })

    describe('openAccount', () => {
        it('should open account in happy path', () => {

            bank.openAccount(password, amount);
        });

        it('should return account number for new account', () => {
            const accountNumber = bank.openAccount(password, amount);
            expect(accountNumber).to.be.greaterThan(0);
        })
    })


    describe('withdraw', () => {

        let accountNumber;
        beforeEach(() => {
            accountNumber = bank.openAccount("Any Name",password, amount);
        })


        it('should withdraw in happy path', () => {
            
            expect(bank.withdraw(accountNumber, 1, password)).to.equal(true);
        })
        it('should throw InvalidAccountError for invalid account', () => {
            try{
                bank.withdraw(-1,1,password);
                expect.fail("Expected InvalidAccountError to be thrown");
            }catch(e){
                expect(e).to.be.an.instanceOf(InvalidAccountError);
            }
        })

        it('shuld throw an InvalidAmountError for negative amount',()=>{
            expect(()=> bank.withdraw(1,-1,password)).to
                        .throw(InvalidAmountError)
                        .and.haveOwnProperty('amount',-1)
        })

        it('should throw an InvalidCredentialsError for invalid password',()=>{
            expect(()=> bank.withdraw(accountNumber,1,"wrong-password"))
            .to.throw(InvalidCredentialsError)
            //.with('account',accountNumber)      
        })
    })
})

