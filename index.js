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
    debugger;
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

function sum(a, b) {
    console.log(a + b)
}

var value = sum(5, 8)
// 13

