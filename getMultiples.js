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
module.exports = {multiply, addTwoNumbers, divide, getOddNumbers, getOddNumberz, getDoubledNumbers, getEvenNumbers};