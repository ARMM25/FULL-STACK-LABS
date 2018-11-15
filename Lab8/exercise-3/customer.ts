class Customer{ //1. create customer class
    private firstName: string; //add private strings
    private lastName:string;

    constructor(firstName: string, lastName: string){ //2. create constructor 
        this.firstName = firstName; //set the local properties 
        this.lastName = lastName;
    }
    public greeter(){ //3.create public greeter! 
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

let customer = new Customer("John", "Smith"); //4. changing the customer object instance to pass in 2 params
customer.greeter();//for the first and last name. 

//5. run cmd tsc + name of file to create js file