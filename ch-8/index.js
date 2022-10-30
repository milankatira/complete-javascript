//OOBS
var myNames = "milan";
var myAge = 21;
function myName() {
  console.log(`my details ${myNames} and ${myAge}`);
}
myName();

//object before Es6
let bioData_1 = {
  myName: "milan",
  myAge: 26,
  getData: function () {
    console.log(
      `My name is ${bioData_1.myName} and my age is ${bioData_1.myAge}`
    );
  },
};
console.log(bioData_1.myName);
bioData_1.getData();

//object after Es6
let bioData = {
  myName: "milan katira",
  myAge: 26,
  getData() {
    console.log(bioData.myName);
    console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
  },
};

bioData.getData();

const add = (a, b) => {
  return a + b;
};

const subs = (a, b) => {
  return Math.abs(a - b);
};
const mult = (a, b) => {
  return a * b;
};

const calculator = (num1, num2, operator) => {
  return operator(num1, num2);
};

calculator(5, 2, subs);

console.log(calculator(5, 2, subs));

// I have to do the hardcoded for each operation which is bad
// we will use the callback and the HOF to make it simple to use

// Now instead of calling each function indivisually we can call it
// by simply using one function that is calculator

console.log(calculator(5, 6, add));
console.log(calculator(5, 6, subs));
console.log(calculator(5, 6, mult));

// In the above example, calculator is the higher-order function,
// which accepts three arguments, the third one being the callback.
// Here the calculator is called the Higher Order Function because it takes
// another function as an argument

// and add, sub and mult are called the callback function bcz they are passed
// as an argument to another fucntion
