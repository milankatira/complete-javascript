//?Features of ECMAScript 2015 also known as ES6
//~LET VS CONST vs VAR

//!var => Function scope
//!let and const => Block Scope

console.log("------------------------------------temperature literals----------------------------------------------------------")
//!template literals
for (let num = 1; num <= 10; num++) {
  let tableOf = 12;
  console.log(` ${tableOf} * ${num} = ${tableOf * num}`);
}


// !Object Properties

// ~➡ we can now use Dynamic Properties
console.log("------------------------------------dynamic properties------------------------------------------------------------------")
let myName = "milan";
const myBio = {
  [myName]: "hello how are you?",
  [20 + 1]: "is my age"
}

console.log(myBio);

console.log("------------------------------------default parameters----------------------------------------------------------")
//!default parameter 
function mult(a, b = 5) {
  return a * b;
}
console.log(mult(6))

console.log("------------------------------------array and fat arrow function----------------------------------------------------------")
//!array
var intro = ["milan", "katira", 21]
console.log(intro[0])

//!fat arrow function
const sum = () => `the sum of the two number is ${(a = 5) + (b = 6)}`;
console.log(sum());

console.log("------------------------------------spread operators--------------------------------------------------------------")
//~Spread Operator

const color = ['red', 'green', 'blue', 'white', 'pink'];

const myColors = ['red', 'green', 'blue', 'white', 'pink', 'yellow', 'black'];

const MyFavColors = [...color, 'yellow', 'black'];

console.log(MyFavColors);


// !ES7 features
console.log("------------------------------------ES 7--------------------------------------------------------------")
console.log("------------------------------------array include--------------------------------------------------------------")
//!1: array include
const colors = ['red', 'green', 'blue', 'white', 'pink'];
const isPresent = colors.includes('yellow');
console.log(isPresent);

const colors_1 = ['red', 'green', 'blue', 'white', 'pink'];
const isPresent_1 = colors_1.includes('red');
console.log(isPresent_1);

//!2: **
console.log(2 ** 3);

// !ES8 Features
console.log("------------------------------------ES 8--------------------------------------------------------------")
// String padding
// Object.values()
// Object.entries()
let str = '1234'.padStart(8, "0")
console.log(str)

let varstr = '1234'.padEnd(10, "*")
console.log(varstr)

const person = { name: 'Fred', age: 87 };

// console.log( Object.values(person) );
const arrObj = Object.entries(person);
console.log(Object.fromEntries(arrObj));



console.log("------------------------------------loop--------------------------------------------------------------")
//!loop in array
var myFriends = ['milan', 'ramesh', 'kanak', 'vishal'];
for (var i = 0; i < myFriends.length; i++) {
  console.log(myFriends[i]);
}

console.log("------------------------------------length--------------------------------------------------------------")
//!length
console.log(myFriends.length);

console.log(myFriends[myFriends.length -1 ]);

console.log("-----------------------------------return iindex number ---------------------------------------------------------")
//!return index number
for (let i in myFriends) {
  console.log(i);
}
console.log("------------------------------------for each--------------------------------------------------------------")
//!forEach
var myFriends = ['vinod', 'ramesh', 'kanak', 'vishal'];


//!for loop for multiple elements 
myFriends.forEach(function (element, index, array) {
  console.log(element + " " + index + " " + array);
});

//!search in array 

console.log("------------------------------------search--------------------------------------------------------------")
console.log(myFriends.lastIndexOf("kanak", 2));

console.log(myFriends.indexOf("kanak", 2));
console.log(myFriends.indexOf("kanak", 3));

console.log(myFriends.includes("kanak"));

//!filtration method
let numbers = [1, 2, 3, 4, 5, 6, 7, 8,];

//!find(only return first value)

const prices = [200, 300, 350, 400, 450, 500, 600];
console.log("------------------------------------find--------------------------------------------------------------")
const findElem = prices.find((currVal) => currVal < 600);
console.log(findElem);
console.log("------------------------------------findindexof--------------------------------------------------------------")
console.log(prices.findIndex((currVal) => currVal < 1400));

//!filter
console.log("------------------------------------array filter--------------------------------------------------------------")
//!return array containing all values
const newPriceTag = prices.filter((elem, index) => {
  return elem < 1400;
})
console.log(newPriceTag);
console.log("------------------------------------sort--------------------------------------------------------------")
//!sort
const array1 = [1, 30, 4, 21, 100000, 99];
console.log(array1.sort());

//~crud 
//~push and unshift
console.log("------------------------------------push--------------------------------------------------------------")
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('chicken');
console.log(animals);
console.log(count);// return length=4

console.log("------------------------------------unshift--------------------------------------------------------------")
const anm = ['pigs', 'goats', 'lions', 'sheep'];
const coun = anm.unshift('cake',);
console.log(coun);
console.log(anm);

//~pop and shift
console.log("------------------------------------pop--------------------------------------------------------------")
const plants = ['broccoli', 'cauliflower', 'kale', 'tomato', 'cabbage'];
console.log(plants);
console.log(plants.pop());
console.log(plants);

console.log("------------------------------------shift--------------------------------------------------------------")
const plant = ['broccoli', 'cauliflower', 'kale', 'tomato', 'cabbage'];
console.log(plant);
console.log(plant.shift());
console.log(plant);

//~map, reduce, filter

//~map(it return true and false)
console.log("------------------------------------map--------------------------------------------------------------")
const number = [1, 2, 3, 4];
const doubled = number.map(item => item * 2);
console.log(doubled); // [2, 4, 6, 8]

//~filter
console.log("------------------------------------filter--------------------------------------------------------------")
const number_1 = [1, 2, 3, 4];
const evens = number_1.filter(item => item % 2 === 0);
console.log(evens); // [2, 4]

const students = [
  { name: 'Quincy', grade: 96 },
  { name: 'Jason', grade: 84 },
  { name: 'Alexis', grade: 100 },
  { name: 'Sam', grade: 65 },
  { name: 'Katie', grade: 90 }
];
const studentGrade = students.map(student => student.grade >= 90);
console.log(studentGrade);
//return true of false
const studentGrades = students.filter(student => student.grade >= 90);
console.log(studentGrades);

//~reduce
console.log("------------------------------------reduce--------------------------------------------------------------")
//a=0, c=1 => a=1
//a=1, c=2 => a=3
//a=3, c=3 => a=6
//a=6, c=4 => a=10
const num_1 =[1,2,3,4]
const sum_R=num_1.reduce((a,c)=>{ return a + c },)
console.log(sum_R)

//!falt function conver 3d array to 2d array
console.log("------------------------------------flat--------------------------------------------------------------")
const arr = [
  ['zone_1', 'zone_2'],
  ['zone_3', 'zone_4'],
  ['zone_5', 'zone_6'],
  ['zone_7', ['zone_7', ['zone_7', 'zone_8']]]
];

console.log(arr.flat(Infinity));