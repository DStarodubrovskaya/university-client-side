var Car = /** @class */ (function () {
    function Car(manufactuarer, model, engineVolume) {
        // sets the engine volume parameter to a default value of 1600 in the constructor (explicitly).
        if (engineVolume === void 0) { engineVolume = 1600; }
        // Next part checks: if the trimmed strings have enough characters
        // if the engine volume is an integer and is at least 500
        if (manufactuarer.trim().length < 4 || model.trim().length < 2 ||
            engineVolume % 1 !== 0 || engineVolume < 500) {
            throw "צרוף פרטי מנוע לא הגיוני.";
        }
        // If all tests passed: сreates a new object
        this.manufacturer = manufactuarer.trim();
        this.model = model.trim();
        this.engineVolume = engineVolume;
    }
    Car.prototype.toString = function () {
        return "".concat(this.manufacturer, " ").concat(this.model, " ").concat(this.engineVolume);
    }; // adds a toString method to the class that returns a string with the values of the 3 private fields
    Car.prototype.fuelConsumption = function () {
        return Math.round(this.engineVolume / 100);
    }; // adds a method named fuelConsumption that returns the rounded value (using Math.round)
    return Car;
}()); // creates class Car
// tests the class: creates Car objects and logs them using toString.
var car1 = new Car('Mazda', 'CX5', 1800);
var car2 = new Car('Toyota', 'Corolla');
console.log(car1.toString());
console.log(car2.toString());
