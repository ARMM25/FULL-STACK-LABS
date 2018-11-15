
    class Customer { //1. this creates the class Custmoer
    firstName: string;  //two string typed properties
    lastName: string;
    public greeter(){ //2. create greeter method that uses THIS keyword to OUTPUT properties(strings)
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

//3.create customer object by creating an instance of the Customer class. 
let customer = new Customer();
customer.firstName = "John";
customer.lastName = "Smith";
customer.greeter(); //call the greeter method to get ouput. 

//4. tsc + name of file to create js file
