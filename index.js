//todo ➡️ ➡️  ➡️   😧section-1 😄 ⬅️ ⬅️ ⬅️
console.log("hello world");

//value and variable

var name = "milan";
console.log(name);
//milan

//data types in js
// 📝undefined
// 📝Boolean
// 📝Number
// 📝String
// 📝BigInt
// 📝Symbol

console.log(typeof (name));
//string

var a = 26;
console.log(typeof (a))
//number

var milan = true;
console.log(typeof (milan))
//boolean

console.log(typeof (b))
//undefined

console.log(10 + "10")
//1010

console.log(10 - "4")
//6

console.log("milan" - "katira")
//nan
console.log(true + true)
//true==1
//false==0
//2

var c = null;
console.log(c)
//null

console.log(typeof (c))
//object

var number = 987654321;
var Node = "node js"

console.log(isNaN(number))
console.log(isNaN(Node))
//false
//true

//operator in js
// 📝Assignment operators
// 📝Arithmatic operators
// 📝Comparison operators
// 📝Logical
// 📝string
// 📝ternary

//!operator 
//todo 1)Assignment operators
var a = 5
var b = 10;
var c = b

c += 2;
console.log(c)

c -= 2;
console.log(c)

c *= 2;
console.log(c)

c /= 2;
console.log(c)

// 12
// 10
// 20
// 10

//todo 2)arithmatic operator

console.log(10 + 3)
console.log(10 - 3)
console.log(10 * 3)
console.log(10 / 3)
console.log(10 % 3) //!remainder

// 13
// 7
// 30
// 3.3333333333333335
// 1

//todo 3)comparison operator

var x = 5
var y = 6;

console.log(x == y)
console.log(x >= y)
console.log(x <= y)
console.log(x > y)
console.log(x < y)

// false
// false
// true
// false
// true

//!AND
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

// true
// false
// false
// false

//!OR
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

// true
// true
// true
// false

//!NOT
console.log(!false)
console.log(!true)

//true
//false

//todo 5)// Increment and Decrement operator
//!Operator: x++ or ++x or x-- or --x


//~If used postfix, with operator after operand (for example, x++),
//~the increment operator increments and returns the value before incrementing.

var num = 15;    //?14
var newNum = num-- + 5;  //?15+5 =20
console.log(num);
console.log(newNum);

// 14
// 20

//~ If used prefix, with operator before operand (for example, ++x),
//~ the increment operator increments and returns the value after incrementing.

var num = 15;     //?14
var newNum = --num + 5;  //?14 + 5 =19
console.log(num);
console.log(newNum);

// 14
//19

//!string concatinations
console.log("Hello World");

console.log("hello " + "world");

var myName = "milan";

console.log(myName + " milan ");
console.log(myName + " katira ");
console.log(myName + " mk ");

// Hello World
// hello world
// milan milan
// milan katira
// milan mk

//loop in javascript
//data types in js
// 📝if else
// 📝switch
// 📝while
// 📝do-while
// 📝for loop
// 📝for in loop
// 📝for of loop
// 📝conditional rendering

//for loop
if (a == 288) {
  console.log(a)
}
else if (a == 216) {
  console.log(a)
}
else {
  console.log('sorry')
}
//sorry


//switch

var d = 500
switch (d) {
  case 255: console.log(d)
    break;

  case 500: console.log(d)
    break;
}
//500

//tertary 
var age = 18;
console.log((age >= 18) ? "you can vote" : "you can't vote");

//you can vote

//While loop
var num = 20;
//    // block scope
while (num <= 10) {
  console.log(num); //infinte loop
  num++;
}

//Do-While Loop 

var num = 20;
do {
  debugger;
  console.log(num); //infinte loop
  num++;
} while (num > 30);

//20

//for loop
for (var num = 0; num <= 10; num++) {
  console.log(num);
}

// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

//functions in javascript
// 📝function defination
// 📝calling a function
// 📝function parameter
// 📝function arguments
// 📝function expression
// 📝return keyword
// 📝anonymous function

//function defination
function sum(a, b) {
  console.log(a + b)
}

//📲function calling
var value = sum(5, 8)
// 13

// !3️⃣ Function Parameter vs Function Arguments
// Function parameters are the names listed in the function's definition.
// Function arguments are the real values passed to the function.

//!4️⃣ Function expressions
// "Function expressions simply means
// create a function and put it into the variable "

function sum(a, b) {
  var total = a + b;
  console.log(total);
}

var funExp = sum(5, 15);
//20

//! 5️⃣ Return Keyword
// When JavaScript reaches a return statement,
// the function will stop executing.

// Functions often compute a return value.
// The return value is "returned" back to the "caller"

function sum(a, b) {
  return total = a + b;
}

var funExp = sum(5, 25);
//30
console.log('the sum of two no is ' + funExp);

//! 6️⃣ Anonymous Function
var funExp = function (a, b) {
  return total = a + b;
}

console.log(funExp(5, 8))
//13

//let's start  es6 ----> ECMAScript 2015

// 📝let var const
// 📝template Literals
// 📝default arguments
// 📝destructuring
// 📝object properties
// 📝arrow function
// 📝rest properties
// 📝spread function

//1️⃣ LET VS CONST  vs  VAR
//~var => Function scope
//~ let and const => Block Scope

var a = 26;
console.log(a)
//26

a = 30;
console.log(a)
//30

let e = 26;
console.log(e)
//26

e = 30;
console.log(e)
//30

const f = 26;
console.log(f)
//26

// f=30;
// console.log(f)
//!-------->TypeError: Assignment to constant variable.<---------

// 2️⃣ Template literals (Template strings)
for (let num = 1; num <= 10; num++) {
  let tableOf = 12;
  console.log(` ${tableOf} * ${num} = ${tableOf * num}`);
}


function biodata() {
  const myFirstName = "milan";
  console.log(myFirstName);

  if (true) {
    const myLastName = "katira";
  }


}

//console.log(myFirstName);
//ReferenceError: myFirstName is not defined
//because of its block scope


// 2️⃣ Template literals (Template strings)
for (let num = 1; num <= 10; num++) {
  let tableOf = 12;
  console.log(` ${tableOf} * ${num} = ${tableOf * num}`);
}

//!3️⃣  Default Parameters

function mult(a, b = 5) {
  return a * b;
}

console.log(mult(3));

//!4️⃣ Destructuring in ES6
//  ➡ Array Destructuring  🏁

const myBioData = ['milan', 'katira', 21];

let myFName = myBioData[0];
let myLName = myBioData[1];
let myAge = myBioData[2];

console.log(myAge);
//21

// ➡ Object destructuring 🏁
const Data = {
  myFname: 'milan',
  myLname: 'katira',
  myAge: 26
}

console.log(Data)
const change = { ...Data, myAge: 21 }
console.log(change);

//{ myFname: 'milan', myLname: 'katira', myAge: 26 }
//{ myFname: 'milan', myLname: 'katira', myAge: 21 }

//!5️⃣ Object Properties

// ➡ we can now use Dynamic Properties

let Name = "milan";
const myBio = {
  [Name]: "hello how are you?",
  [20 + 6]: "is my age"
}

console.log(myBio);
//{ '26': 'is my age', milan: 'hello how are you?' }

//!6️⃣ Fat Arror Function
const SUM = (a, b) => `the sum of the two number is ${a + b}`;

console.log(SUM(5, 6));
//the sum of the two number is 11

//!7️⃣Spread Operator

const colors = ['red', 'green', 'blue', 'white', 'pink'];
const MyFavColors = [...colors, 'yellow', 'black'];

console.log(MyFavColors);
// [
//     'red',   'green',
//     'blue',  'white',
//     'pink',  'yellow',
//     'black'
// ]

// !ES7 features

// 1: array include
const color = ['red', 'green', 'blue', 'white', 'pink'];
const isPresent = color.includes('purple');
console.log(isPresent);
//false

//2: **
console.log(2 ** 3);
//8  

// !ES8 Features

const message = "my name is milan";
console.log(message);
console.log(message.padStart(50, "+"));
console.log(message.padEnd(50, "-"));

// my name is milan
// ++++++++++++++++++++++++++++++++++my name is milan
// my name is milan----------------------------------

const person = { name: 'xyz', age: 87 };
const arrObj = Object.entries(person);
console.log(Object.fromEntries(arrObj));
//{ name: 'xyz', age: 87 }

//😄 ➡️ ➡️ ➡️   array in javascript    ⬅️ ⬅️ ⬅️ 😄

// 📝Traversal in array
// 📝searching in array
// 📝sort and compare
// 📝CRUD in array
// 📝map,filter,reduce

var myFriends = ['milan', 'ramesh', 'arjun', 'vishal', 5, 5];
console.log(myFriends[myFriends.length - 1]);
//5

console.log(myFriends.length);
//6

var myFriends = ['milan', 'ramesh', 'arjun', 'vishal'];
for (i = 0; i < myFriends.length; i++) {
  console.log(myFriends[i]);
}

// milan
// ramesh
// arjun
// vishal

//!➡️ ☑️ After ES6 we have for..in and for..of loop too

var myFriends = ['milan', 'ramesh', 'arjun', 'vishal'];

for (elements in myFriends) {
  console.log(elements);
}
// 0
// 1
// 2
// 3

for (elements of myFriends) {
  console.log(elements);
}
// milan
// ramesh
// arjun
// vishal

//Array.prototype.forEach() 🙋‍♂️
// Calls a function for each element in the array.

//!foreach
var myFriends = ['milan', 'ramesh', 'arjun', 'vishal'];

//~element=>milan,ramesh...
//~index=>0,1,2,3,..
//~array ["milan,ramesh..."]
myFriends.forEach(function (element, index, array) {
  console.log(element + " index : " +
    index + " " + array);
});

// milan index : 0 milan,ramesh,arjun,vishal
// ramesh index : 1 milan,ramesh,arjun,vishal
// arjun index : 2 milan,ramesh,arjun,vishal
// vishal index : 3 milan,ramesh,arjun,vishal


//!searching and filter
//!search
var myFriendNames = ["milan", "mk", "katira", "katiratechnical", "katira"];

console.log(myFriendNames.indexOf("mk"));
//1

var myFriendNames = ["milan", "mk", "katira", "katiratechnical", "katira"];

console.log(myFriendNames.lastIndexOf("katira"));
//4

var myFriendNames = ["milan", "mk", "katira", "katiratechnical"];

console.log(myFriendNames.includes("katira"));
//true

const prices = [200, 300, 350, 400, 450, 500, 600];

console.log(prices.find((currVal) => currVal < 1500));
//200
console.log(prices.findIndex((currVal) => currVal > 400));
//4

//!filter
const price = [200, 300, 350, 400, 450, 500, 600];

const newPriceTag = price.filter((elem) => {
  return elem < 600;
})
console.log(newPriceTag);
//[ 200, 300, 350, 400, 450, 500 ]

//!sorting of array

const array1 = [1, 30, 4, 21, 100000, 99];
console.log(array1.sort());
//[ 1, 100000, 21, 30, 4, 99 ]

//!crud in array
// Push() ''it returns length of that array'';
// unshift() ''it returns length of that array'';

// pop() ''it returns poped item'';
// shift() ''it returns poped item'';

// splice() ''it returns poped items'';
// indexOf() ''it returns index number or -1'';

// map() ''it returns new array'';

const animals = ['pigs', 'goats', 'sheep'];
animals.push('chicken', 'cats', 'cow');
console.log(animals);
//[ 'pigs', 'goats', 'sheep', 'chicken', 'cats', 'cow' ]

const count = animals.unshift('chicken');
console.log(count);
//7
console.log(animals);
// [
//   'chicken', 'pigs',
//   'goats',   'sheep',
//   'chicken', 'cats',
//   'cow'
// ]

console.log(animals.pop());
console.log(animals);
// cow
// [ 'chicken', 'pigs', 'goats', 'sheep', 'chicken', 'cats' ]

console.log(animals.shift());
console.log(animals);
// chicken
// [ 'pigs', 'goats', 'sheep', 'chicken', 'cats' ]

//!splice the

//first element is for =>>>index where we want to add new elements
//second element is for =  >>>0----add and >>>1 ---replace
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months)
//[ 'Jan', 'Feb', 'March', 'April', 'June' ]
months.splice(2, 1, 'dec')
console.log(months)
//[ 'Jan', 'Feb', 'dec', 'April', 'June' ]

//map

const array = [1, 4, 9, 16, 25];

let newArr = array.map((curElem) => {
  return curElem > 9;
})
console.log(array);
console.log(newArr);

// [ 1, 4, 9, 16, 25 ]
// [ false, false, false, true, true ]


let newArr_1 = array.map((curElm, index, arr) => {
  return `Index no = ${index} and the value is ${curElm} belong to ${arr} `
})
console.log(newArr_1);

// [
//   'Index no = 0 and the value is 1 belong to 1,4,9,16,25 ',
//   'Index no = 1 and the value is 4 belong to 1,4,9,16,25 ',
//   'Index no = 2 and the value is 9 belong to 1,4,9,16,25 ',
//   'Index no = 3 and the value is 16 belong to 1,4,9,16,25 ',
//   'Index no = 4 and the value is 25 belong to 1,4,9,16,25 '
// ]

//reduce
let arr = [5, 6, 2];
let Sum = arr.reduce((accumulator, curElem) => {
  debugger;
  return accumulator += curElem;
})
console.log(Sum);

// converting 2d and 3d array into one dimensional array

const ARR= [
        ['zone_1', 'zone_2'],
        ['zone_3', 'zone_4'],
        ['zone_5', 'zone_6'],
        ['zone_7', ['zone_7', ['zone_7', 'zone_8']]]
    ];


//threshould -->>>  3 
console.log(ARR.flat(3));


//😄 ➡️ ➡️ ➡️   string in javascript    ⬅️ ⬅️ ⬅️ 😄

//!lenght
let myname = "milan katira";
console.log(myname.length);
//12

//!Escape Character
let anySentence = "We are the so-called \"Vikings\" from the north.";
console.log(anySentence);

// 👉 Searching for a String in a String
const mybiodata =  'I am the katira';
//6 is used to skip the 6 character t
console.log(mybiodata.indexOf("t",6));
//5


//return first occurrence
let sData = mybiodata.search("katira");
console.log(sData);
//9

// 👉 Extracting String Parts
var str = "Apple, Bananaa, Kiwi, mango";

//3===>>>starting point
//15===>>>ending point
let res = str.slice(3,15);
console.log(res);
//le, Bananaa,

// 👉 Replacing String Content()
let myBiodata = `I am milan mk katira milan`;

let repalceData = myBiodata.replace('milan','katira');
console.log(repalceData);
console.log(myBiodata)

// I am katira mk katira milan
// I am milan mk katira milan



//👉 Extracting String Characters
// There are 3 methods for extracting string characters:
let Str = "HELLO WORLD";

console.log(Str.charAt(9));
//L
console.log(Str.charCodeAt(0) );
//72 ---utf8 ----- number

let MyName = "milan katira";
console.log(MyName.toUpperCase());
console.log(MyName.toLowerCase());
// MILAN KATIRA
// milan katira

//The concat() Method 🙋‍♂️
//concat() joins two or more strings

let fName = "milan"
let lName = "katira"

console.log(fName + lName );
console.log(`${fName} ${lName}`);
console.log(fName.concat(lName));
console.log(fName.concat(" " ,lName));
// milankatira
// milan katira
// milankatira
// milan katira

//String.trim() 🙋‍♂️
//The trim() method removes whitespace from both
//sides of a string

var str = "              Hello         World!            ";
console.log(str.trim());
//Hello         World!

// Converting a String to an Array
// A string can be converted to an array with the
// split() method

var txt = "a, b,c d,e";   // String
console.log(txt.split(","));           // Split on commas
console.log( txt.split(" "));          // Split on spaces
console.log(txt.split("|"));         // Split on pipe


// [ 'a', ' b', 'c d', 'e' ]
// [ 'a,', 'b,c', 'd,e' ]
// [ 'a, b,c d,e' ]