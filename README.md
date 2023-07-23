# Complete JavaScript

## Chapter-1 Data types and Operators

### Data types

#### String

```javascript
var myName = 'Milan Katira';
console.log(myName); // Milan Katira
console.log(typeof myName); // string
```

#### Number

```javascript
var myAge = 21;
console.log(myAge); // 21
console.log(typeof myAge); // number
```

#### Boolean

```javascript
var iAm = false;
console.log(iAm); // false
console.log(typeof iAm); // boolean
```

#### Object

```javascript
const data = {
  frontend: 'React',
  backend: 'Node',
};
console.log(typeof data); // object
```

#### Array

```javascript
const myData = ['Next.js', '13'];
console.log(typeof myData); // object
```

### Operators

#### Assignment Operators

```javascript
var a = 5;
var b = 10;
var c = b;

c += 2;
console.log(c); // 12

c -= 2;
console.log(c); // 10

c *= 2;
console.log(c); // 20

c /= 2;
console.log(c); // 10
```

#### Arithmetic Operators

```javascript
console.log(10 + 3); // 13
console.log(10 - 3); // 7
console.log(10 * 3); // 30
console.log(10 / 3); // 3.33...
console.log(10 % 3); // 1 (remainder)
```

#### Comparison Operators

```javascript
var x = 5;
var y = 6;
console.log(5 == 6); // false
console.log(5 == '5'); // true
console.log(5 == 5); // true
console.log(5 === '5'); // false
console.log(5 === 5); // true
console.log(5 >= 6); // false
console.log(5 <= 6); // true
console.log(5 > 6); // false
console.log(5 < 6); // true
```

#### Logical AND Operator

```javascript
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
```

#### Logical OR Operator

```javascript
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
```

#### Logical NOT Operator

```javascript
console.log(!false); // true
console.log(!true); // false
```

#### Postfix Operators

```javascript
var num = 15;
var newNum = num-- + 5;
console.log(num); // 14
console.log(newNum); // 20
```

#### Prefix Operators

```javascript
var num = 15;
var newNum = --num + 5;
console.log(num); // 14
console.log(newNum); // 19
```

## Chapter-2 Loop

### if-else Statement

```javascript
const framework = 'react';

if (framework === 'react') {
  console.log('frontend');
} else if (framework === 'node') {
  console.log('backend');
} else {
  console.log('I don\'t know');
}
```

### Switch Case Statement

```javascript
const framework = 'react';

switch (framework) {
  case 'react':
    console.log('frontend');
    break;
  case 'node':
    console.log('backend');
    break;
  default:
    console.log('I don\'t know');
}
```

### Ternary Operator

```javascript
var age = 18;
console.log(age >= 18 ? 'You can vote' : 'You can\'t vote');
```

### While Loop

```javascript
var num = 20;

while (num <= 30) {
  console.log(num);
  num++;
}
```

### Do-While Loop

```javascript
var num = 20;

do {
  console.log(num);
  num++;
} while (num <= 30);
```

### Break

```javascript
var x = 1;

while (x < 10) {
  if (x === 5) {
    break;
  }
  x = x + 1;
  console.log(x);
}
```

### Continue

```javascript
var x = 1;

while (x < 10) {
  x = x + 1;
  if (x === 5) {
    continue;
  }
  console.log(x);
}
```

## Chapter-3 Function

### Function

#### Function Definition

```javascript
function sum() {
  var a = 10;
  var b = 40;
  var total = a + b;
  console.log(total);
}
```

#### Function Constructor

```javascript
var func = new Function('x', 'y', 'return x * y;');

console.log(func(2, 4));
```

### There are 3 ways to define a function

#### 1) Function Definition

```javascript
function sum(a, b) {
  return a + b;
}
```

#### 2) Function Expression

```javascript
const sum = function (a, b) {
  return a + b;
};
```

#### 3) Arrow Function

```javascript
const sum = (a, b) => a + b;
```

### Function Parameters

Function parameters are the names listed in the function's definition.

### Function Arguments

Function arguments are the real values passed to the function.

### Function Currying

```javascript
const sum = (a) => (b) => (c) => (d) => a + b + c + d;
const add = sum(5)(10)(15)(17);

console.log(add); // 47
```

### Infinite Currying

```javascript
function infiniteSum(a) {
  return function (b) {
    if (b) return infiniteSum(a + b);
    return a;
  };
}

console.log(infiniteSum(7)(8)()); // 15
```

### Call, Apply, and Bind

#### The `call()` method is a predefined JavaScript method that can be used to invoke (call) a method with an owner object as an argument (parameter).

```javascript
const person = {
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

const myname = {
  fullName: function (person) {
    return person.firstName + ' ' + person.lastName;
  },
};

const person1 = {
  firstName: 'John',
  lastName: 'Doe',
};

console.log(person.fullName.call(person1)); // John Doe
console.log(myname.fullName(person1)); // John Doe
console.log(person.fullName.apply(person1)); // John Doe

let fullName = person.fullName.bind(person1);

console.log(fullName()); // John Doe
```

#### In the `call()` method, arguments are passed separately.

#### In the `apply()` method, arguments are passed as an array.

#### In the `bind()` method, an object can borrow a

 method from another object.

## Chapter-4 Features of ES6

#### 1) let, var, and const

- `var` - Function scope
- `let` and `const` - Block scope

#### 2) Template Literals

```javascript
const frontend = 'React';
const backend = 'Node';
console.log(`${frontend} and ${backend}`); // React and Node
```

#### 3) Dynamic Object Property

```javascript
let myName = 'Milan';
const myBio = {
  [myName]: 'Hello, how are you?',
  [20 + 1]: 'is my age',
};
console.log(myBio); // { '21': 'is my age', Milan: 'Hello, how are you?' }
```

#### 4) Default Parameters

```javascript
function mult(a, b = 5) {
  return a * b;
}

console.log(mult(6)); // 30
```

#### 5) Fat Arrow Function

```javascript
const sum = (a, b) => a + b;
```

#### 6) Spread Operator

```javascript
const color = ['red', 'green', 'blue', 'white', 'pink'];
const MyFavColors = [...color, 'yellow', 'black'];
console.log(MyFavColors); // ['red', 'green', 'blue', 'white', 'pink', 'yellow', 'black']
```

## Chapter-5 String Methods

#### 1) Escape Character

```javascript
let anySentence = 'We are the so-called "Vikings" from the north.';
console.log(anySentence); // We are the so-called "Vikings" from the north.
```

#### 2) Finding Methods

- Index Of

```javascript
const myData = 'hello i am milan';
console.log(myData.indexOf('am')); // 8
```

- Last Index Of

```javascript
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const searchTerm = 'dog';
console.log(`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm, 52)}`);
// "The index of the first "dog" from the end is 52"
```

- Search

```javascript
const myBioData = 'I am the mk Technical';
let sData = myBioData.search('Technical');
console.log(sData); // 12
```

#### 3) String Slicing

```javascript
var str = 'my name is milan';
let res = str.slice(0, 4);
console.log(res); // my n
```

#### 4) CharAt

```javascript
let str_1 = 'HELLO WORLD';
console.log(str_1.charAt(9)); // L
```

#### 5) Accessing Values

```javascript
var str = 'HELLO WORLD';
console.log(str[1]); // E
```

#### 6) Case Changing

```javascript
let Name = 'milan katira';
console.log(Name.toUpperCase()); // MILAN KATIRA
console.log(Name.toLowerCase()); // milan katira
```

#### 7) Concatenation

```javascript
console.log(fName.concat(' ', lName)); // milan katira
```

#### 8) Trim

```javascript
var str = '              Hello         World!            ';
console.log(str.trim()); // hello        world!
```

#### 9) Split

```javascript
var txt = 'a, b,c d,e';
console.log(txt.split(',')); // ['a', ' b', 'c d', 'e']
```

## Chapter-6 Date and Time

#### Get Time

```javascript
console.log(new Date()); // 2022-10-30T04:41:54.992Z
console.log(new Date().toLocaleString()); // 10/30/2022, 10:11:54 AM
console.log(new Date().toString()); // Sun Oct 30 2022 10:11:55 GMT+0530 (India Standard Time)
console.log(Date.now()); // 1667104915026
```

#### Get Year, Month, Date, and Day

```javascript
const curDate = new Date();
console.log(curDate.getFullYear()); // 2022
console.log(curDate.getMonth()); // 9
console.log(curDate.getDate()); // 30
console.log(curDate.getDay()); // 0 (Sunday)
```

## Chapter-7 Math in JavaScript

```javascript
console.log(Math.PI); // 3.1415...
console.log(Math.round(Math.PI)); // 3

console.log(Math.pow(2, 3)); // 8
console.log(2 ** 3); // 8
console.log(Math.sqrt(25)); // 5

console.log(Math.abs(-55)); // 55
console.log(Math.ceil(4.51)); // 5
console.log(Math.round(4.51)); // 5
console.log(Math.ceil(99.01)); // 100
console.log(Math.round(99.1)); // 99
console.log(Math.floor(4.7)); // 4
console.log(Math.floor(99.1)); // 99
console.log(Math.trunc(4.6)); // 4
console.log(Math.trunc(-99.1)); // -99

console.log(Math.min(0, 150, 30, 20, -8, -200)); // -200
console.log(Math.max(0, 150, 30, 20, -8, -200)); // 150
```

## Chapter-8 Closure

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.

#### Example

```javascript
const updateCountwrapper = () => {
  let _count = 0; // It is private
  return function updateCount() {
    _count++;
    console.log(_count);
  };
};

const updatedCount = updateCountwrapper(); // It will return a function
updatedCount(); // 1
updatedCount(); // 2
updatedCount(); // 3
updatedCount(); // 4
```

```javascript
const CardCounter = () => {
  let _count = 0;
  function _updateCount(val) {
    _count += val;
  }
  return {
    increment() {
      _updateCount(1);
    },
    decrement() {
      _updateCount(-1);
    },
    value() {
      return _count;
    },
  };
};

const MyCardCounter = CardCounter();
MyCardCounter.increment(); // +1
MyCardCounter.increment(); // +1
console.log(MyCardCounter.value()); // 2
```

## Chapter-9 Hoisting

```javascript
getName(); // "Namaste JavaScript"
console.log(x); // undefined

var x = 7;

function getName() {
  console.log('Namaste JavaScript');
}
```

I apologize for the oversight. Let's cover Chapter-10: Object Destructuring.

## Chapter-10 Object Destructuring

Object destructuring is a convenient way to extract properties from an object and assign them to variables. It allows you to create shorter and more readable code when working with objects.

#### Example:

```javascript
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  email: 'john@example.com',
};

// Destructuring the object
const { firstName, lastName, age, email } = user;

console.log(firstName); // John
console.log(lastName); // Doe
console.log(age); // 30
console.log(email); // john@example.com
```

#### Renaming Variables:

You can also rename the variables while destructuring:

```javascript
const { firstName: fName, lastName: lName, age: userAge, email: userEmail } = user;

console.log(fName); // John
console.log(lName); // Doe
console.log(userAge); // 30
console.log(userEmail); // john@example.com
```

#### Default Values:

If the property is not present in the object, you can assign a default value to the variable during destructuring:

```javascript
const userWithoutEmail = {
  firstName: 'Alice',
  lastName: 'Smith',
  age: 25,
};

const { firstName, lastName, age, email = 'No email provided' } = userWithoutEmail;

console.log(firstName); // Alice
console.log(lastName); // Smith
console.log(age); // 25
console.log(email); // No email provided
```

#### Nested Object Destructuring:

You can also destructure nested objects:

```javascript
const student = {
  name: 'John',
  age: 20,
  contact: {
    email: 'john@example.com',
    phone: '123-456-7890',
  },
};

const { name, age, contact: { email, phone } } = student;

console.log(name); // John
console.log(age); // 20
console.log(email); // john@example.com
console.log(phone); // 123-456-7890
```

Destructuring is a powerful feature that simplifies working with objects in JavaScript, making the code more concise and readable.

## Chapter-11 Shallow Copy and Deep Copy

- Shallow Copy: In a shallow copy, a copy of the original object is stored, and only the reference address is finally copied.

- Deep Copy:

 In a deep copy, the copy of the original object and the repetitive copies both are stored.

```javascript
const User = {
  name: 'user',
};

// Shallow copy
const adm = Object.assign({}, User);
// const adm = { ...User };
// const adm = JSON.parse(JSON.stringify(User)); // Deep copy

adm.name = 'adm';
console.log(User); // { name: 'user' }
```

## Chapter-12 Arrays

```javascript
[3, 4, 5, 6].at(1); // 4
[3, 4, 5, 6].pop(); // [3, 4, 5]
[3, 4, 5, 6].push(7); // [3, 4, 5, 6, 7]
[3, 4, 5, 6].fill(1); // [1, 1, 1, 1]
[3, 4, 5, 6].join('-'); // '3-4-5-6'
[3, 4, 5, 6].shift(); // [4, 5, 6]
[3, 4, 5, 6].reverse(); // [6, 5, 4, 3]
[3, 4, 5, 6].unshift(1); // [1, 3, 4, 5, 6]
[3, 4, 5, 6].includes(5); // true
[3, 4, 5, 6].map((num) => num + 6); // [9, 10, 11, 12]
[3, 4, 5, 6].find((num) => num > 4); // 5
[3, 4, 5, 6].some((num) => num > 5); // true
[3, 4, 5, 6].filter((num) => num > 4); // [5, 6]
[3, 4, 5, 6].every((num) => num > 5); // false
[3, 4, 5, 6].findIndex((num) => num > 4); // 2
[3, 4, 5, 6].reduce((acc, num) => acc + num); // 18
```

## Chapter-13 Exception Handling

- `try` block: The try block contains the code that might generate an exception.

- `catch` block: If an exception occurs in the try block, it is caught in the catch block, and appropriate actions can be taken.

- `finally` block: The finally block contains code that will be executed regardless of whether an exception was thrown or caught.

```javascript
function calculate() {
  try {
    const data = sub(3, 4);
    return data;
  } catch (err) {
    console.log(err);
  }
}

function sub(a, b) {
  if (b > a) {
    throw new Error('b should be less than a');
  } else {
    return b - a;
  }
}

calculate();
```

```javascript
function calculate() {
  try {
    const data = sub(3, 4);
    return data;
  } catch (err) {
    console.log(err.message);
  } finally {
    console.log('No one can stop me');
  }
}

function sub(a, b) {
  if (b > a) {
    throw new Error('b should be less than a');
  } else {
    return b - a;
  }
}

calculate();
```

## Chapter-14 Async JavaScript

#### Promise

```javascript
let myPromise = new Promise(function (myResolve, myReject) {
  let x = 0;

  if (x == 0) {
    myResolve('OK');
  } else {
    myReject('Error');
  }
});

myPromise.then((res) => console.log(res)).catch((err) => console.log(err));
```

#### Await/Async

```javascript
const data = async function myFunction() {
  return 'Hello';
};

const datas = function myFunction() {
  return Promise.resolve('Hello');
};

console.log(data()); // Promise
console.log(datas()); // Promise

data().then((res) => console.log(res));

function myFunction() {
  return 'Hello';
}

console.log(myFunction());
```

#### Promise.all

```javascript
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = async () => {
  return 'data';
};

Promise.all([promise1, promise2, promise3()]).then((values) => {
  console.log(values);
});
```

#### Promise.resolve

```javascript
const promise3 = async () => {
  return 'data';
};

Promise.resolve(promise3()).then((values) => {
  console.log(values);
});
```

## Chapter-15 Generator Function

```javascript
function* simpleGenerator() {
  console.log('Function called');
  yield 'first step';
  let x = 40;
  yield x;
  yield 'last step';
}

let sG = simpleGenerator();
console.log(sG.next());
console.log(sG.next());
console.log(sG.next());
console.log(sG.next());
// Function called
// { value: 'first step', done: false }
// { value: 40, done: false }
// { value: 'last step', done: false }
// { value: undefined, done: true }
```
