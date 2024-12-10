// Importing required classes and enum from other modules
import { BankTransaction, TransactionType } from "./bank-transaction";
import { BankAccountDetails } from "./bank-account-details";

// Class representing a complete bank account, which combines transaction and account details
class BankAccount {
    constructor (
        public transaction : BankTransaction, public accountDetails : BankAccountDetails
    ) {}

    toString = () => `${this.transaction.toString()} into ${this.accountDetails.toString()}`
}

// Example: Creating a bank transaction instance
let trnsctn : BankTransaction = new BankTransaction(1000, new Date(), 'open account', TransactionType.openAccount)
// Example: Creating bank account details instance
let acntDtl : BankAccountDetails = new BankAccountDetails('PLONI', 'ramat gan', 'male', 123456789)
// Example: Combining transaction and account details into a complete bank account
let myBankAccount : BankAccount = new BankAccount(trnsctn,acntDtl)
// Displaying the combined account details and transaction details
console.log(myBankAccount.toString())