// Enum representing different types of bank transactions
export enum TransactionType{
    withdraw,  // Withdrawing money from the account
    deposit, // Depositing money into the account
    openAccount // Opening a new bank account
    }
// Class representing a bank transaction
export class BankTransaction {
    constructor(
        public amount: number,
        public trnDate: Date = new Date(), // default (today's date) 
        public asmachta : string,
        public trnType : TransactionType = TransactionType.deposit // default
    ) {}

    // Method to return a formatted string describing the transaction
    toString(){
        return `on ${this.trnDate.toUTCString()} you ${TransactionType[this.trnType]} ${this.amount} NIS`
    }
}

/*let t2:BankTransaction = new BankTransaction(1000,undefined,"opening",
    TransactionType.openAccount);
console.log(t2.toString());*/
