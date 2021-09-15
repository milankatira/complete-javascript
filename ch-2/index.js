//~If...Else 

//!The if statement executes a statement if a specified condition is truthy.
//!If the condition is falsy, another statement can be executed.

console.log("--------------------------------------if..else statement------------------------------------------")
var tomr = 'sunny';

if(tomr == 'rain'){
  console.log('take a raincoat');
}else{
  console.log('No need to take a raincoat');
}

//~we have total 6 falsy values in javascript
//! 0,"",undefined,null,NaN,false  is false anyway
console.log("--------------------------------------ternary operators------------------------------------------")
//~Conditional (ternary) operator
var age = 18;
console.log((age >= 18) ? "you can vote" : "you can't vote");


//~switch statement

var area = "square" ;
var PI = 3.142, l=5, b=4, r=3;

if(area == "circle"){
  console.log("the area of the circle is : " + PI*r**2);

}else if(area == "triangle"){
  console.log("the area of the triangle is : " + (l*b)/2);

}else if(area == "rectangle"){
  console.log("the area of the rectangle is : " + (l*b));

}else{
  console.log("please enter valid data");
}
console.log("--------------------------------------switch cases-----------------------------------------")

var area = "dsfsad" ;
var PI = 3.142, l=5, b=4, r=3;

switch(area){
  case 'circle':
    console.log("the area of the circle is : " + PI*r**2);
    break;

  case 'triangle':
    console.log("the area of the triangle is : " + (l*b)/2);
    break;

  case 'rectangle':
    console.log("the area of the rectangle is : " + (l*b));
    break;

  default:
    console.log("please enter valid data");
}

console.log("--------------------------------------do while loop------------------------------------------")
var num=20;
// block scope
while(num <= 10){
  console.log(num); //infinte loop
  num++;
}

var num = 20;
do{
  debugger;
  console.log(num); //infinte loop
  num++;
}while(num <= 10);
