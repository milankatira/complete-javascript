//~If...Else

//!The if statement executes a statement if a specified condition is truthy.
//!If the condition is falsy, another statement can be executed.

console.log(
  "--------------------------------------if..else statement------------------------------------------"
);
var tomr = "sunny";

if (tomr == "rain") {
  console.log("take a raincoat");
} else {
  console.log("No need to take a raincoat");
}

//~we have total 6 falsy values in javascript
//! 0,"",undefined,null,NaN,false  is false anyway
console.log(
  "--------------------------------------ternary operators------------------------------------------"
);
//~Conditional (ternary) operator
var age = 18;
console.log(age >= 18 ? "you can vote" : "you can't vote");

//~switch statement

var area = "square";
var PI = 3.142,
  l = 5,
  b = 4,
  r = 3;

if (area == "circle") {
  console.log("the area of the circle is : " + PI * r ** 2);
} else if (area == "triangle") {
  console.log("the area of the triangle is : " + (l * b) / 2);
} else if (area == "rectangle") {
  console.log("the area of the rectangle is : " + l * b);
} else {
  console.log("please enter valid data");
}
console.log(
  "--------------------------------------switch cases-----------------------------------------"
);

var area = "dsfsad";
var PI = 3.142,
  l = 5,
  b = 4,
  r = 3;
const framework = "react";

switch (framework) {
  case "react":
    console.log("frontend");
    break;
  case "node":
    console.log("backend");
    break;
  default:
    console.log("i don`t know");
}

if (framework === "react") {
  console.log("frontend");
} else if (framework === "node") {
  console.log("backend");
} else {
  console.log("i don`t know");
}

console.log(
  "--------------------------------------do while loop------------------------------------------"
);
var num = 20;
// block scope
while (num <= 30) {
  console.log(num); //infinite loop
  num++;
}

var num = 20;
do {
  debugger;
  console.log(num); //infinite loop
  num++;
} while (num <= 30);
