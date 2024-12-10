"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importing required classes and enum from other modules
var bank_transaction_1 = require("./bank-transaction");
var bank_account_details_1 = require("./bank-account-details");
// Class representing a complete bank account, which combines transaction and account details
var BankAccount = /** @class */ (function () {
    function BankAccount(transaction, accountDetails) {
        var _this = this;
        this.transaction = transaction;
        this.accountDetails = accountDetails;
        this.toString = function () { return "".concat(_this.transaction.toString(), " into ").concat(_this.accountDetails.toString()); };
    }
    return BankAccount;
}());
// Example: Creating a bank transaction instance
var trnsctn = new bank_transaction_1.BankTransaction(1000, new Date(), 'open account', bank_transaction_1.TransactionType.openAccount);
// Example: Creating bank account details instance
var acntDtl = new bank_account_details_1.BankAccountDetails('PLONI', 'ramat gan', 'male', 123456789);
// Example: Combining transaction and account details into a complete bank account
var myBankAccount = new BankAccount(trnsctn, acntDtl);
// Displaying the combined account details and transaction details
console.log(myBankAccount.toString());
