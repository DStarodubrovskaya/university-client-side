"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccountDetails = void 0;
var activeBank = "Big Bank INC"; // defines and initializes a string constant 
// Class representing bank account details
var BankAccountDetails = /** @class */ (function () {
    // Сonstructor of the class
    function BankAccountDetails(owner, addr, gender, tz) {
        this.owner = owner;
        this.addr = addr;
        this.gender = gender;
        this.tz = tz;
        this.bankName = activeBank;
    }
    // Method to format and display account details
    BankAccountDetails.prototype.toString = function () {
        var salutation = (this.gender.toLowerCase()[0] == 'm') ? 'Mr.' : 'Mrs.';
        return "".concat(salutation, " ").concat(this.owner, " ").concat(this.tz, " @ ").concat(this.bankName);
    };
    return BankAccountDetails;
}());
exports.BankAccountDetails = BankAccountDetails;
/*let t:BankAccountDetails = new BankAccountDetails("plonit almonit","ta","female",129387465);

console.log(t.toString());*/
