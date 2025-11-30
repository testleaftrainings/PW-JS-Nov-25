/* Arrays In JavaScript
1.Dynamic in Size
Arrays Grow and shrink in size as elements are added

2. Heterogenous"
Arrays in JS can store different datatypes like numbers, string, boolean*/

const { log } = require("node:console");

/* 1. push() --> add element to the end of the array */

let letters = ["a","b","c","d","e"]
letters.push("f","g","h");
console.log(letters);
/* [
  'a', 'b', 'c',
  'd', 'e', 'f',
  'g', 'h'
] */

/* 2. pop() --> remove only one from the end of the array */

letters.pop()
console.log(letters);

/* [
  'a', 'b', 'c',
  'd', 'e', 'f',
  'g'
] */

/* 3. shift() --> remove only one element from the first part of the array */

letters.shift()
console.log(letters); //[ 'b', 'c', 'd', 'e', 'f', 'g' ]


/* 4. unshift() --> add one or more elements to the beginning of the array */

letters.unshift("x","y","z")
console.log(letters);

/* [
  'x', 'y', 'z',
  'b', 'c', 'd',
  'e', 'f', 'g'
] */


/* 5. slice() --> Extract a section of an array without mofifying the original array */

let letters1 = ["a","b","c","d","e"]; // 0,1,2,3,4
               // -5,-4,-3,-2,-1 --> negative index
let result = letters1.slice(1,4)

console.log(result); //[ 'b', 'c', 'd' ]

let result1 = letters1.slice(-5,-1) //[ 'a', 'b', 'c', 'd' ]
console.log(result1);

//7.Spread syntax(...)

let numbers1 =[1,2,3,4];
let numbers2 = [5,6,7,8]

let spreadArray = [...numbers1,...numbers2]
console.log(spreadArray);


//8, concat()

let mergedConcat = numbers1.concat(numbers2);
console.log(mergedConcat);

//9. Sorting array

let numberArray = [7, 8, 9, 10]

numberArray.sort();
console.log(numberArray);  // [ 10, 6, 7, 8, 9 ]

numberArray.sort((a,b)=>a-b) // ascending array [ 7, 8, 9, 10 ]
console.log(numberArray);

numberArray.sort((a,b)=>b-a)
console.log(numberArray); // descending order [ 10, 9, 8, 7 ]











