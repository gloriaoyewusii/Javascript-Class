const {multiply, addTwoNumbers, divide, getOddNumbers, getOddNumberz, getDoubledNumbers, getEvenNumbers} =  require("./getMultiples.js");

let numberOne = 2;
let numberTwo = 6;		//Arrange

test('multiply two numbers', ()=>{
let result = multiply(numberOne, numberTwo);	//Act
let answer = 12;
expect(result).toBe(answer); 		//Assert
})


test("add two numbers", ()=>{
let sum = addTwoNumbers(numberOne, numberTwo);
let answer = 8;
expect(sum).toBe(answer);

})

test("divide two numbers", ()=>{
let division = divide(numberOne, numberTwo);
let answer = 3;
expect(division).toBe(answer);
})

test ('return odd numbers', ()=>{
 let arrayOfNumbers = [1, 2, 3, 4, 8, 5];
 let oddNumbers = getOddNumbers(arrayOfNumbers);
 let answer = [1, 3, 5];
 expect(oddNumbers).toEqual(answer);
})

test ('return odd numbers', ()=>{
 let arrayOfNumbers = [1, 2, 3, 4, 8, 5];
 let oddNumbers = getOddNumberz(arrayOfNumbers);
 let answer = [1, 3, 5];
 expect(oddNumbers).toEqual(answer);
})

test('multiply each number by two', ()=>{
    let numbers = [2, 3, 4, 5, 6, 7];
    let result = getDoubledNumbers(numbers);
    let answer = [4, 6, 8, 10, 12, 14];
    expect(result).toEqual(answer);
})

beforeEach(()=>{
    numbers = [2, 3, 4, 5, 6, 7];
});

test('Check even numbers', ()=>{
    let result = getEvenNumbers(numbers);
    let answer = [2,4, 6];
    expect
})