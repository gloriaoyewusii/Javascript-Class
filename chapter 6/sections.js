//Section 6.1

function getPentagonalNumber(n){
let numerator = n * ((3 * n) - 1);
let denominator = 2
let pentagonalNumber = numerator / denominator;
return pentagonalNumber
}

var prompt = require('prompt-sync')();
var n = prompt('How many more times? ');
console.log(getPentagonalNumber(n));

//Section 6.2
function sumDigits(number){
let length = number.toString().length;
let sumOfDigits = 0;
let index = 0;
let extractedDigit = 0;
let removedDigit = 0;
for (let index = 0; index < length; index++){
	extractedDigit = number % 10;
	removedDigit = Math.floor(number / 10);
	sumOfDigits += extractedDigit;
	number = removedDigit;
}

return sumOfDigits;
}

number = 237
console.log(sumDigits(number));

//Section 6.3
function reverse(number){
let length = number.toString().length;
let extractedDigit = 0;
let removedDigit = 0;
let reverse = "";
for (let index = 0; index < length; index++){
	extractedDigit = number % 10;
	removedDigit = Math.floor(number / 10);
	reverse += extractedDigit;
	number = removedDigit;
}
return reverse;

}

function isPalindrome(number){
let reversedNumber = reverse(number)
if (reversedNumber == number)
	return true
else if (reversedNumber != number)
	return false
}

var numberr = prompt('Enter a number: ');
console.log(isPalindrome(numberr));

//Section 6.4

var fourDigits = prompt('Enter a number: ');
console.log(reverse(fourDigits));

/*
//Section 6.5if (numbers[index] > minimum)
numbers[index] = numbers[index];
function displaySortedNumbers(num1, num2, num3){
let numbers = [num1, num2, num3];
let minimum = num1;
let highest = num1;

for (let index = 0; index < numbers.length; index++){
	if (numbers[index] < minimum)
		minimum = numbers[index];
		
	
}

return numbers;
}

num1 = 4;
num2 = 9;
num3 = 2;

console.log(displaySortedNumbers(num1, num2, num3));
*/

//Section 6.7

function futureInvestmentValue(investmentAmount, monthlyInterestRate, numberOfMonths){

let futureInvestmentValue = investmentAmount * (1 + monthlyInterestRate) ** numberOfMonths
return futureInvestmentValue;
}

var amount = prompt('Enter an investment amount: ');
var mIR = prompt('Enter monthly investment rate: ');
var nOM = prompt('Enter number of months: ');

console.log(futureInvestmentValue(amount, mIR, nOM));
