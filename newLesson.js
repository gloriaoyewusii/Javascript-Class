
let var1 = 2;
let var2 = 3;
let var3 = 4;

console.log("Var1 = " + var1 + "\nVar2 = " + var2 + "\nVar3 = " + var3 + "\n");


temp = var1;
var1 = var2;
var2 = var3;
var3 = temp;

console.log("Var1 = " + var1 + "\nVar2 = " + var2 + "\nVar3 = " + var3);

const person = {
name: "Gloria",
sex: "female",
age: 314,
isBrown: true,
married: null,
hobbies: ["dancing", "eating", "traveling"]

};


console.log(person);

let items = [1, "ada", true, null, {}];
console.log(items+"\n");





let x = 2;
let y = 4;

var z = x + y;
var zxy = 2 * z;


console.log("1. The answer is: "+ zxy);


let value = 12;
var remainder = value % 10;
var addition = remainder + value;

console.log("2. The answer is: "+ addition);


let m = 2;
let n = 3;
var result = (m * m) * n;

console.log("3. The answer is: "+ result);

let a = 14;
let b = a + 10;
let c = a - 10;
let d = a % 10;

var multiply = b * c * d;
var division = a / multiply;

console.log("4. The answer is: "+ division);

let user = {
firstName : "Gloria",
lastName : "Child Of God",
age : 14,
greet : function(){
	return ("hello")
	}
}

console.log(user.lastName)
console.log(user["lastName"])



user.firstName = "Favour of God" + " For Life"
user.age = 314
user.sex = "female"
console.log(user)

console.log(user.greet())

let keys = Object.keys(user);
console.log(keys)

let values = Object.values(user);
console.log(values)

let entries = Object.entries(user);
console.log(entries)


let number = 11;
for (let index = 1; index < number; index++){
	console.log(index);
};

let numbers = [1, 2, 3, 4, 5];
for (const number of numbers){
if (number > 2)
console.log(number)

}

for (let index in numbers){
console.log(index + " " + numbers[index])
console.log(" ")
}

/"""Objects are not iterable and so one should not attempt to loop through an object through the "for-of" loop type in javascript. Also, in the for-of loop, you can't decrement and control the counter. let personne = { name: "Glow", age: 08 } for (const data of personne){ console.log(data)}"""/


const userProfile = {
name: "Gloria",
age: 314
}

for (let index in userProfile){
console.log(index + " " + userProfile[index])
console.log(" ")
}

let count = 0;
while (count< 5){
console.log(count)
count++
}

let numberr = [1, 2, 3, 4, 5];
let index = 0;

do{
console.log(numberr[index])
index++;
}while(index < numberr.length);
