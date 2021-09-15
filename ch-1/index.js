//!console statements
console.log("---------------------------console statement-------------------------------------")
console.log("hello world")
//alert("hello world from the server")

console.log("---------------------------value and variable-------------------------------------")

//!value and variable 
console.log("---------------------------string-------------------------------------")
var myName = 'milan katira';
console.log("myName")
console.log(typeof(myName))

console.log("---------------------------number-------------------------------------")
var myAge = 21;
console.log(myAge)
console.log(typeof(myAge))

console.log("---------------------------Boolean-------------------------------------")
var iAm = false;
console.log(iAm);
console.log(typeof(iAm))

console.log("---------------------------operators-------------------------------------")
console.log("---------------------------Assignment operators----------------------------")
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

console.log("---------------------------Arithmatic operators----------------------------")
//todo 2)arithmatic operator

console.log(10+3)
console.log(10-3)
console.log(10*3)
console.log(10/3)
console.log(10%3) //!remainder

console.log("---------------------------comparision operators----------------------------")
//todo 3)comparison operator

var x = 5
var y = 6;

console.log(x==y)
console.log(x>=y)
console.log(x<=y)
console.log(x>y)
console.log(x<y)

console.log("---------------------------Logical  operators----------------------------")
//todo 4)logical operators

console.log("---------------------------Logical AND operators----------------------------")
//!AND
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

console.log("---------------------------Logical OR operators----------------------------")
//!OR
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

console.log("---------------------------Logical NOT operators----------------------------")
//!NOT
console.log(!false)
console.log(!true)

//todo 5)// Increment and Decrement operator
//!Operator: x++ or ++x or x-- or --x

console.log("---------------------------postfix operators----------------------------")
//~If used postfix, with operator after operand (for example, x++),
//~the increment operator increments and returns the value before incrementing.

var num = 15;    //?14
var newNum = num-- + 5;  //?15+5 =20
console.log(num);
console.log(newNum);

console.log("---------------------------prefixfix operators----------------------------")
//~ If used prefix, with operator before operand (for example, ++x),
//~ the increment operator increments and returns the value after incrementing.

var num = 15;     //?14
var newNum = --num + 5;  //?14 + 5 =19
console.log(num);
console.log(newNum);

console.log("--------------------------- string concatinations----------------------------")
//!string concatinations
console.log("Hello World");

console.log("hello " +  "world");

var myName = "milan";

console.log(myName + " milan ");
console.log(myName + " katira ");
console.log(myName + " mk ");
