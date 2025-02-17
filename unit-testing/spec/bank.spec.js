const {Bank,InvalidAccountError,InvalidAmountError,InvalidCredentialsError} = require('../src/finance/Bank');
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
        let account={id: 1, balance:amount, password};

        let fakeRepository;


        beforeEach(() => {
            fakeRepository={
                getById: async()=> account,
                update: async(_account)=> account=_account
                
            }
            bank=new Bank(fakeRepository);
           
        })


        it('should withdraw in happy path', async() => {
            
            //expect(bank.withdraw(accountNumber, 1, password)).to.equal(true);

            await bank.withdraw(1,1, password);

            await expect(bank.getBalance(accountNumber)).to.eventually.equal(amount-1);
        })

        it('should throw InvalidAccountError for invalid account', async() => {
            // try{
            //     await bank.withdraw(-1,1,password);
            //     expect.fail("Expected InvalidAccountError to be thrown");
            // }catch(e){
            //     expect(e).to.be.an.instanceOf(InvalidAccountError);
            // }
            fakeRepository.getById = async()=> {
                throw new InvalidAccountError(-1,`Invalid Account Number ${-1}`);
            };

            await expect(bank.withdraw(-1,1,password)).to.eventually.be.rejectedWith(InvalidAccountError);
        })

        it('shuld throw an InvalidAmountError for negative amount',async()=>{
            // expect(()=> bank.withdraw(1,-1,password)).to
            //             .throw(InvalidAmountError)
            //             .and.haveOwnProperty('amount',-1)

            await expect(bank.withdraw(1,-1,password)).to.eventually.be.rejectedWith(InvalidAmountError);
        })

        it('should throw an InvalidCredentialsError for invalid password',async()=>{
            // expect(()=> bank.withdraw(accountNumber,1,"wrong-password"))
            // .to.throw(InvalidCredentialsError)
            //.with('account',accountNumber)      

            await expect(bank.withdraw(accountNumber,1,"wrong-password")).to.eventually.be.rejectedWith(InvalidCredentialsError);
        })
    })


    xdescribe('deposit', () => {
        let accountNumber;
        beforeEach(() => {
            accountNumber = bank.openAccount("Any Name",password, amount);
        })

        it('should deposit in happy path', () => {

        })

        it('should fail for invalid account', () => {
            expect(()=>bank.deposit(-1,1)).to.throw(InvalidAccountError);
        })
    })
})

