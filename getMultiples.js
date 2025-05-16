const getOddNumberz = (array)=>{
 let newArray = [];
 let count = 0;
 for (index in array){
  console.log(index);
  if (array[index] % 2 != 0)
   newArray[count++] = array[index];
 }
return newArray;
}
const getOddNumbers = (array)=>{
let newArray = [];
 for (element of array){
  if (element % 2 != 0)
   newArray.push(element);
 }
 return newArray;
}

const divide = (firstNumber, secondNumber) =>{
let answer = secondNumber / firstNumber;
return answer;
}

function addTwoNumbers(firstNumber, secondNumber){
 let answer = firstNumber + secondNumber;
 return answer;
}

function multiply(numberOne, numberTwo){
let result = numberOne * numberTwo;
return result;
}

// /February 11 class
function getDoubledNumbers(arrayOfNumbers){
	let doubledNumbers = [];
	arrayOfNumbers.forEach(element => {
		let doubledNumber = element * 2;
		doubledNumbers.push(doubledNumber);
	});
	return doubledNumbers;
}

const getEvenNumbers = (arrayOfNumbers)=>{
  let evenNumbers = [];
  arrayOfNumbers.forEach((element)=>{
    if(element % 2 == 0){
      evenNumbers.push(element)
    };
  });
  return evenNumbers;
}

function addThreeToEachElement(array){
  let result = array.map((number, index)=>(number + index))
  return result;
};
//Feb 12 class 

function addOneToLastElement(numbersArray){
  let newArray = [];
  let joinedNumbers = Number(numbersArray.join(''));
  joinedNumbers += 1;
  let stringNumber = String(joinedNumbers);
  for (let index of stringNumber)
    newArray.push(Number(index));
    return newArray;
}

const isOdd = (number)=>{
  let answer = number % 2 != 0;
  return answer;
}

function getOddNumbersz(array){
  return array.filter(isOdd)
  // This is the same as the filter function above
  // return array.filter((number)=> number % 2 != 0)
}

// const isGreater = (word)=>{
//   let answer = word.length > 4;
//   return answer;
// }

function isGreater(word){
  let answer = word.length > 4;
  return answer;
}
const getWordsGreaterThanFourLetters = (arrayOfWords)=>{
  return arrayOfWords.filter(isGreater);
  // return arrayOfWords.filter((word)=>word.length > 4);
}

// const ageIsGreater = (student)=>{
//   let students = {};
//   if (students[age] > 20)
//     return age;
// }

function getStudents(students){
  return students.filter((student)=> student.age > 20);
}
module.exports = {
  multiply, addTwoNumbers,
  divide, getOddNumbers,
  getOddNumberz, getDoubledNumbers, 
  getEvenNumbers, addThreeToEachElement, 
  addOneToLastElement, getOddNumbersz, 
  getWordsGreaterThanFourLetters, getStudents};