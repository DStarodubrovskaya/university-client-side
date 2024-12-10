const activeBank: string="Big Bank INC"; // defines and initializes a string constant 

// Class representing bank account details
export class BankAccountDetails
{
    public bankName : string = activeBank;
    // Сonstructor of the class
    constructor (
        public owner : string,
        public addr : string,
        public gender : string,
        public tz : number        
    ) {} 

    // Method to format and display account details
    toString(){
        let salutation : string = (this.gender.toLowerCase()[0]=='m') ? 'Mr.' : 'Mrs.'
        return `${salutation} ${this.owner} ${this.tz} @ ${this.bankName}` 
    } 
}

/*let t:BankAccountDetails = new BankAccountDetails("plonit almonit","ta","female",129387465);

console.log(t.toString());*/
