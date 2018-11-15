"use strict";
exports.__esModule = true;
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName; //must add this within the constructor
        this.age = age;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello " + this.firstName + " " + this.lastName); //indicate the parameters to be passed
    };
    Customer.prototype.GetAge = function () {
        console.log("Age: " + this.age); //indicate the parameters to be passed 
    };
    return Customer;
}());
exports.Customer = Customer;
