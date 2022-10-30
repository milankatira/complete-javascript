//!console statements
console.log(
  "---------------------------console statement-------------------------------------"
);
console.log("hello world");

//!value and variable
console.log(
  "---------------------------string-------------------------------------"
);
var myName = "milan katira";
console.log(myName); //milan katira
console.log(typeof myName); //string

console.log(
  "---------------------------number-------------------------------------"
);
var myAge = 21;
console.log(myAge); //21
console.log(typeof myAge); //number

console.log(
  "---------------------------Boolean-------------------------------------"
);
var iAm = false;
console.log(iAm); //false
console.log(typeof iAm); //boolean

const data = {
  frontend: "react",
  backend: "node",
};
console.log(typeof data); //object

const myData = ["nextjs", "13"];
console.log(typeof myData); //object

console.log(
  "---------------------------operators-------------------------------------"
);
console.log(
  "---------------------------Assignment operators----------------------------"
);
//!operator
//todo 1)Assignment operators
var a = 5;
var b = 10;
var c = b;

c += 2;
console.log(c); //12

c -= 2;
console.log(c); //10

c *= 2;
console.log(c); //20

c /= 2;
console.log(c); //10

console.log(
  "---------------------------Arithmatic operators----------------------------"
);
//todo 2)arithmatic operator

console.log(10 + 3); //13
console.log(10 - 3); //7
console.log(10 * 3); //30
console.log(10 / 3); //3.33...
console.log(10 % 3); //1 (remainder)

console.log(
  "---------------------------comparision operators----------------------------"
);
//todo 3)comparison operator

var x = 5;
var y = 6;

console.log(5 == 6); //false
console.log(5 == '5'); //true
console.log(5 == 5);  //true
console.log(5 === "5"); //false
console.log(5 === 5); //true
console.log(5 >= 6); //false
console.log(5 <= 6); //true
console.log(5 > 6);  //false
console.log(5 < 6); //true

console.log(
  "---------------------------Logical  operators----------------------------"
);
//todo 4)logical operators

console.log(
  "---------------------------Logical AND operators----------------------------"
);
//!AND
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true);  //false
console.log(false && false);  //false

console.log(
  "---------------------------Logical OR operators----------------------------"
);
//!OR
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

console.log(
  "---------------------------Logical NOT operators----------------------------"
);
//!NOT
console.log(!false); //true
console.log(!true); //false

//todo 5)// Increment and Decrement operator
//!Operator: x++ or ++x or x-- or --x

console.log(
  "---------------------------postfix operators----------------------------"
);
//~If used postfix, with operator after operand (for example, x++),
//~the increment operator increments and returns the value before incrementing.

var num = 15; 
var newNum = num-- + 5; 
console.log(num); //14
console.log(newNum); //20

console.log(
  "---------------------------prefixfix operators----------------------------"
);
//~ If used prefix, with operator before operand (for example, ++x),
//~ the increment operator increments and returns the value after incrementing.

var num = 15; 
var newNum = --num + 5; 
console.log(num); //14
console.log(newNum);  //19

console.log(
  "--------------------------- string concatinations----------------------------"
);
//!string concatinations
console.log("Hello World");

console.log("hello " + "world");

var myName = "milan";

console.log(myName + " milan ");
console.log(myName + " katira ");
console.log(myName + " mk ");
