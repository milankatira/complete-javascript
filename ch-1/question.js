//~ Difference between null vs undefined?

//!1st javascript bug
console.log("--------------------first javascript bug----------------------------")
console.log("5"+5) 

console.log("--------------------second javascript bug---------------------------")

console.log("--------------------null and type object---------------------------")
var iAmUseless = null;
console.log(iAmUseless);
console.log(typeof(iAmUseless));

//!2nd javascript bug

console.log("--------------------undefined and type undefined---------------------------")
var iAmStandBy;
console.log(iAmStandBy);
console.log(typeof(iAmStandBy));

console.log("--------------------NAN (not a number)------------------------------------")
//~ whaty is NAN 

//!NaN is a property of the global object.
//!In other words, it is a variable in global scope.
//!The initial value of NaN is Not-A-Number

var myPhoneNumber = 9876543210;
var myName = "thapa technical";

console.log(isNaN(myPhoneNumber));
console.log(isNaN(myName));

console.log("--------------------DIFFERENCE BETWEEN === AND == ------------------------------------")
//~What is the Difference between == vs === ?
console.log("-------------------- == ------------------------------------")
var num1 = 5;
var num2 = '5';

console.log(typeof(num1));
console.log(typeof(num2));

console.log(num1 == num2 );

console.log("-------------------- === ------------------------------------")
var num1 = 5;
var num2 = '5';

console.log(typeof(num1));
console.log(typeof(num2));
console.log(num2);

console.log(num1 === num2 );