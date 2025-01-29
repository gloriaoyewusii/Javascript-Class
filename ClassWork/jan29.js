const person = {
name: "Gloria",
age: 314,
sex: "female",
complexion: "bright",
stateOfOrigin: "Ile-Yoruba",
country: "Nigeria"
};

console.log(person);

const car = { 
make: 'Toyota',
model: 'Camry',
year: 2021
};

function carFunction(car){
	for (const property in car){
		console.log(`${property}: ${car[property]}`);
	}
}

carFunction(car);


const laptop = {
brand: "Dell",
price: 1200
};


laptop["colour"]="blue";

let key = Object.keys(laptop)
let value = Object.values(laptop)

console.log(key);
console.log(value);

const phone = {
brand: "Apple",
price: 999
};
phone["price"]=1500;

console.log(phone);

const persona = {
firstName: "Gloria",
lastName: "Oyewusi",
fullname: function(){
	return persona["firstName"] + " " + persona["lastName"]
	}
};

console.log(persona.fullname());

const personne = {
firstName: "John",
lastName: "Doe", 
age: 25
};

function personFunction (personn){
	return "First Name: " + personne["firstName"] + ", Last Name: " + personne["lastName"] + ", Age: " + personne["age"]
}

console.log(personFunction(personne));

const book = {
title: 'The Great Gatsby',
author: 'F. Scott Fitzgerald',
yearPublished: 1925
};

const {author, title} = book;
console.log(title + " by " + author);

const profile = {
name: "Sam",
age: 40,
profession: "Engineer"
};
const {name, age, profession} = profile;
console.log(name + " is a " + age + " year old " + profession);

