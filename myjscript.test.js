const {multiply, addTwoNumbers, divide, getOddNumbers, getOddNumberz, getDoubledNumbers, getEvenNumbers, addThreeToEachElement, addOneToLastElement, getOddNumbersz, getWordsGreaterThanFourLetters, getStudents} =  require("./getMultiples.js");

beforeEach(()=>{
    
    numbers = [2, 3, 4, 5, 6, 7];
}); 



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



test('Check even numbers', ()=>{
    let result = getEvenNumbers(numbers);
    let answer = [2,4, 6];
    expect
})

// test ('add three to each element', ()=>{
//     let result = addThreeToEachElement(numbers);
//     let answer = [5, 6, 7, 8, 9, 10];
//     expect(result).toEqual(answer);
// })
test ('add three to each element', ()=>{
    let result = addThreeToEachElement(numbers, index);
    let answer = [2, 4, 6, 8, 10, 12];
    expect(result).toEqual(answer);
})

test ('add one to last digit in array', ()=>{
    let numbersArray = [9, 9, 9];
    let result = addOneToLastElement(numbersArray);
    let answer = [1, 0, 0, 0];
    expect(result).toEqual(answer);
})
test('get the odd numbers', ()=>{
    let result = getOddNumbersz(numbers);
    let answer = [3, 5, 7];
    expect(result).toEqual(answer);
})
test('return words with length greater than four', ()=>{
    let words = ["hello", "world", "javascript", "java", "egg"];
    let result = getWordsGreaterThanFourLetters(words)
    let answer = ["hello", "world", "javascript"];
    expect(result).toEqual(answer);
})

test('Return objects with age greater than 20', ()=>{
    const students = [
        {name: "John", age: 20},
        {name: "Johnny Bravo", age: 28},
        {name: "Jane", age: 18},
        {name: "Alice", age: 22}
    ];
    let result = getStudents(students);
    let answer = [{name: "Johnny Bravo", age: 28}, {name: "Alice", age: 22}]
    expect(result).toStrictEqual(answer);
})
