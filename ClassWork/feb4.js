
let countedNumbers = {};
let allNumbers = [2, 2, 1, 3, 5, 5];
for (const number of allNumbers){
	countedNumbers[number] = countedNumbers[number] ? countedNumbers[number] + 1 : 1;
}
console.log(countedNumbers);

const array = [1, "egg", null, []];  //LITERAL METHOD

const arrayOfNumbers = new Array(2); //ARRAY CONSTRUCTOR
arrayOfNumbers[0]=20;
arrayOfNumbers[1]=2
arrayOfNumbers.push(1);
arrayOfNumbers.push(3);
arrayOfNumbers.push(4);

console.log(arrayOfNumbers);

console.log(Array.of('foo', 2, 'bar', true));  //ARRAY.OF
console.log(Array.of());

let firstName = "Dr. Gloria";
let newArray = Array.from(firstName); //ARRAY.FROM
console.log(newArray);

const arrays = new Array();
arrays[0] = 20;
arrays[1] = 2;
arrays.unshift(1)
arrays.unshift(3)
arrays.unshift(4)

console.log(arrays);

let shift = arrays.shift();
console.log(shift)
console.log(arrays)


arrays.pop(2)

let pop = arrays.pop()
console.log(pop)

let animals = ['dogs', 'chicks', 'fish', 'sheep', 'bison', 'squirrel', 'swan']
console.log(animals.slice(1, 3))


let spliced = animals.splice(4, 2, "hen", "chicks")
console.log(spliced)
console.log(animals)