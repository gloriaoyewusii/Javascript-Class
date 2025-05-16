class Human{
    #name;
    #age;
    speak;

    constructor(name, age){
        this.#name = name;
        this.#age = age;
        this.speak = ()=>{
            return `${this.#name} speaks English`;
        }
    }
    

    set first_name(name){
        this.#name = name;
    }
    get first_name(){
        return this.#name;
    }
    
}

let personOne = new Human("Gloria", 314);
console.log(personOne);
console.log("My name is: " + personOne.first_name);
console.log(personOne.speak("English"));

module.exports = Human;

