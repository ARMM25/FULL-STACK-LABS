export class Customer{ //1.Add export to the Customer class to mark it as a module in the app
                        //and create the main.ts file
    private firstName: string; //add the strings and make it private!
    private lastName:string;
    private age:number;   //age string!
    constructor(firstName: string, lastName: string, age:number){ //2.create a constructor with strings and number for age
        this.firstName = firstName;
        this.lastName = lastName; //must add this within the constructor
        this.age = age; 
    }

    public greeter(){ //create a greeter method. 
        console.log(`Hello ${this.firstName} ${this.lastName}`); //indicate the parameters to be passed
    }
    
    public GetAge(){ //create age method
        console.log(`Age: ${this.age}`); //indicate the parameters to be passed 
    }
}
