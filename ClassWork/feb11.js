//Question 1
const student = {
    name: "John Doe",
    age: 22,
    courses: ["Math", "Physics", "Computer Science"],
    address: {
        city: "New York",
        zip: 10001,
    }
}

//Question 2
student["age"]=23;
student["GPA"]=3.8;


function getDetails(){
    let result = student["name"] + " is " + student["age"] + " years old and has a GPA of " + student["GPA"];
    return result;
}
function getName(){
    let result = student["name"];
    return result;
    }
function getCourses(){
    let result = student["courses"][1];
    return result;
}
function getZIP(){
    let result = student["address"]["zip"];
    return result;
}

//Question 3
const bankAccount = {
    owner: "Alice",
    balance: 500
}
function ownersDetails(){
    let result = bankAccount["owner"] + ", " + bankAccount["balance"];
    return result;
}
function deposit(amount){
    let result = amount + bankAccount["balance"];
    bankAccount["balance"] = result;
    return bankAccount["balance"];
}
function withdraw(amount){
    if (amount > bankAccount["balance"]){
        throw new Error("Insufficient funds");
    }
    let result = bankAccount["balance"] - amount;
    bankAccount["balance"] = result;
    return bankAccount["balance"];
}
function balance(){
    let result = bankAccount["balance"];
    return result;
}

module.exports = {getName, getCourses, getZIP, getDetails, ownersDetails, deposit, withdraw, balance};