class Car {
    private manufacturer: string;
    private model: string;
    private engineVolume: number;
    constructor (manufactuarer: string, model: string, engineVolume: number = 1600) { 
        // sets the engine volume parameter to a default value of 1600 in the constructor (explicitly).

        // Next part checks: if the trimmed strings have enough characters
        // if the engine volume is an integer and is at least 500
        if (manufactuarer.trim().length < 4 || model.trim().length < 2 || 
            engineVolume % 1 !== 0  || engineVolume < 500)
            {
                throw "צרוף פרטי מנוע לא הגיוני."
            }
        
        // If all tests passed: сreates a new object
        this.manufacturer = manufactuarer.trim();
        this.model = model.trim();
        this.engineVolume = engineVolume;
    }
    toString() {
        return `${this.manufacturer} ${this.model} ${this.engineVolume}`
    } // adds a toString method to the class that returns a string with the values of the 3 private fields

    fuelConsumption() {
        return Math.round(this.engineVolume/100);
    } // adds a method named fuelConsumption that returns the rounded value (using Math.round)


} // creates class Car

// tests the class: creates Car objects and logs them using toString.
const car1 : Car = new Car('Mazda', 'CX5', 1800);
const car2 : Car = new Car('Toyota', 'Corolla');
console.log(car1.toString());
console.log(car2.toString())
