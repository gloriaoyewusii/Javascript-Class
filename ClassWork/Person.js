const Human = require("./Human");

class Person extends Human{
    #gender;
    #complexion;

    constructor(name, age, gender, complexion){
        super(name, age);
        this.#gender = gender;
        this.#complexion = complexion
    }
    set gender(gender){
        this.#gender = gender;
    }
    get gender(){
        return this.#gender;
    }

    speak = ()=>{
        return `${this.first_name} speaks Deutsch`;
    }

}
let personOne = new Person("Gloria", 314, "female", "English");
console.log("My name is " + personOne.first_name + ", and I am a " + personOne.gender + " \n" + personOne.speak());
