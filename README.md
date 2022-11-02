# complete-javascript

complete javascript

## Chapter-1 Data types and operators

## data type

### string

```javascript
var myName = "milan katira";
console.log(myName); //milan katira
console.log(typeof myName); //string
```

### number

```javascript
var myAge = 21;
console.log(myAge); //21
console.log(typeof myAge); //number
```

### boolean

```javascript
var iAm = false;
console.log(iAm); //false
console.log(typeof iAm); //boolean
```

### object

```javascript
const data = {
  frontend: "react",
  backend: "node",
};
console.log(typeof data);
```

### array

```javascript
const myData = ["nextjs", "13"];
console.log(typeof myData); //object
```

## operators

### Assignment operators

```javascript
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
```

### Arithmatic operators

```javascript
console.log(10 + 3); //13
console.log(10 - 3); //7
console.log(10 * 3); //30
console.log(10 / 3); //3.33...
console.log(10 % 3); //1 (remainder)
```

### Comparison operator

```javascript
var x = 5;
var y = 6;
console.log(5 == 6); //false
console.log(5 == "5"); //true
console.log(5 == 5); //true
console.log(5 === "5"); //false
console.log(5 === 5); //true
console.log(5 >= 6); //false
console.log(5 <= 6); //true
console.log(5 > 6); //false
console.log(5 < 6); //true
```

### logical AND operator

```javascript
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false
```

### logical OR operator

```javascript
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false
```

### logical NOT operator

```javascript
console.log(!false); //true
console.log(!true); //false
```

### postfix operators

```javascript
var num = 15;
var newNum = num-- + 5;
console.log(num); //14
console.log(newNum); //20
```

### prefix operators

```javascript
var num = 15;
var newNum = --num + 5;
console.log(num); //14
console.log(newNum); //19
```

## Chapter-2 loop

### if else statement

```javascript
const framework = "react";

if (framework === "react") {
  console.log("frontend");
} else if (framework === "node") {
  console.log("backend");
} else {
  console.log("i don`t know");
}
```

### Switch case statement

```javascript
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
```

### Ternary operator

```javascript
var age = 18;
console.log(age >= 18 ? "you can vote" : "you can't vote");
```

### While loop

#### It will first meet the condition and then run logic

```javascript
var num = 20;
// block scope
while (num <= 30) {
  console.log(num); //infinite loop
  num++;
}
```

### Do-while loop
#### First time execute the logic and then meet the condition

```javascript
var num = 20;
do {
  debugger;
  console.log(num); //infinite loop
  num++;
} while (num <= 30);
```

## Chapter-3 function

### Function 
#### -Definition

```javascript
function sum(){
  var a = 10, b = 40;
  var total = a+b;
  console.log(total);
}
```

### There are 3 way to define function

#### -1)function definition
```javascript
function sum(a, b) {
  return a + b;
}
```

#### -2)function expression
```javascript
const sum = function (a, b) {
  return a + b;
}
```

#### -3)arrow function
```javascript
const sum = (a, b) => a + b;
```

#### -Function parament
#### Function parameters are the names listed in the function's definition.
#### -Function arguments are the real values passed to the function.

#### -Function currying
```javascript
const sum = (a) => (b) => (c) => (d) => a + b + c + d;
const add = sum(5)(10)(15)(17);
console.log(add); //47
```
