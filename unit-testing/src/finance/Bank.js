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


class Bank{
    openAccount(){
        return 1;
    }

    withdraw(accountNumber, amount, password){
        //return true;
        if(accountNumber<0)
            throw new InvalidAccountError(-1,`Invalid Account Number ${accountNumber}`);

        if(amount<0){
            throw new InvalidAmountError(amount,`Invalid Amount ${amount}`);
        }

        return true;
    }
}

module.exports={Bank,InvalidAccountError,InvalidAmountError,InvalidCredentialsError}