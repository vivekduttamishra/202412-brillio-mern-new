class InvalidAccountError extends Error{
    constructor(accountNumber,message){
        super(message);
        this.name='InvalidAccountError';
        this.accountNumber=accountNumber;
    }
}

class InvalidAmountError extends Error{
    constructor(amount,message){
        super(message);
        this.name='InvalidAmountError';
        this.amount=amount;
    }
}

class InvalidCredentialsError extends Error{
    constructor(accountNumber,message){
        super(message);
        this.accountNumber=accountNumber;
        this.name='InvalidCredentialsError';
    }
}

class InsufficientBalanceError extends Error{
    constructor(accountNumber,message){
        super(message);
        this.accountNumber=accountNumber;
        this.name='InsufficientBalanceError';
    }
}


class Bank{

    constructor(){
        this.repository=new MongooseRepository();
    }

    async withdraw(accountNumber, amount, password){
        
        if(amount<0){
            throw new InvalidAmountError(amount,`Invalid Amount ${amount}`);
        }
        //return true;
        let account = await this.repository.getById(accountNumber);
       
        if(account===null)
            throw new InvalidAccountError(-1,`Invalid Account Number ${accountNumber}`);

        if(account.password!==password){
            throw new InvalidCredentialsError(accountNumber,'Invalid Password');
        }

        if(account.balance<amount)
            throw new InsufficientBalanceError(accountNumber,`Insufficient Balance ${account.balance}`);

        account.balance-=amount;

        await this.repository.update(account);

        
    }


    async openAccount(account){
       let id = await this.repository.getHighestAccountNumber(); 
       account.id = id+1;
       await this.repository.create(account);
       return account.id;
    }

    deposit(accountNumber,amount){
        if(accountNumber<0)
            console.log('invalid account number');
        if(amount<0)
            console.log('invalid  amount')

        console.log('deposit successful');
    }

    async getBalance(accountNumber){
        let account = await this.repository.getById(accountNumber);
        if(account===null)
            throw new InvalidAccountError(-1,`Invalid Account Number ${accountNumber}`);
        return account.balance;
    }

    
}

module.exports={Bank,InvalidAccountError,InvalidAmountError,InvalidCredentialsError}