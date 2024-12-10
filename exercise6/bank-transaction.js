"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankTransaction = exports.TransactionType = void 0;
// Enum representing different types of bank transactions
var TransactionType;
(function (TransactionType) {
    TransactionType[TransactionType["withdraw"] = 0] = "withdraw";
    TransactionType[TransactionType["deposit"] = 1] = "deposit";
    TransactionType[TransactionType["openAccount"] = 2] = "openAccount"; // Opening a new bank account
})(TransactionType || (exports.TransactionType = TransactionType = {}));
// Class representing a bank transaction
var BankTransaction = /** @class */ (function () {
    function BankTransaction(amount, trnDate, // default (today's date) 
    asmachta, trnType // default
    ) {
        if (trnDate === void 0) { trnDate = new Date(); }
        if (trnType === void 0) { trnType = TransactionType.deposit; }
        this.amount = amount;
        this.trnDate = trnDate;
        this.asmachta = asmachta;
        this.trnType = trnType;
    }
    // Method to return a formatted string describing the transaction
    BankTransaction.prototype.toString = function () {
        return "on ".concat(this.trnDate.toUTCString(), " you ").concat(TransactionType[this.trnType], " ").concat(this.amount, " NIS");
    };
    return BankTransaction;
}());
exports.BankTransaction = BankTransaction;
/*let t2:BankTransaction = new BankTransaction(1000,undefined,"opening",
    TransactionType.openAccount);
console.log(t2.toString());*/
