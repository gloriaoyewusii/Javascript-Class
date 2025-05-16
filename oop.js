// the create function below is a prototype method used to create an object, 1. the create 2. the setPrototypeOf function method
let animal = {
    name: "unknown",
    color: "",
    sound: function(sound){
        return `${this.name} makes a ${sound} sound`
    }
}
let dog = Object.create(animal);
console.log(dog);
dog.name = "Dog";
dog.colour = "Brown";

console.log(dog.sound)

let cat = {}
Object.setPrototypeOf(animal,cat);
console.log(cat);
cat.name = "wildCat"
console.log(cat)

// this is an example of the constructor way of creating an object
function Human(name, age, complexion){
    this.name = name;
    this.age = age;
    this.complexion = complexion;
    this.describe = function(){
        return `My name is ${this.name}, and I am ${this.age} years old.`
    }
};



let personOne = new Human("Gloria", "16", "chocolate")
console.log(personOne);
console.log(personOne.describe());
