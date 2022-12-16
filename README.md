# complete-javascript

complete javascript

## Chapter-1 Data types and operators

## data type

### string

```javascript
var myName = 'milan katira'
console.log(myName) //milan katira
console.log(typeof myName) //string
```

### number

```javascript
var myAge = 21
console.log(myAge) //21
console.log(typeof myAge) //number
```

### boolean

```javascript
var iAm = false
console.log(iAm) //false
console.log(typeof iAm) //boolean
```

### object

```javascript
const data = {
  frontend: 'react',
  backend: 'node',
}
console.log(typeof data)
```

### array

```javascript
const myData = ['nextjs', '13']
console.log(typeof myData) //object
```

## operators

### Assignment operators

```javascript
var a = 5
var b = 10
var c = b

c += 2
console.log(c) //12

c -= 2
console.log(c) //10

c *= 2
console.log(c) //20

c /= 2
console.log(c) //10
```

### Arithmatic operators

```javascript
console.log(10 + 3) //13
console.log(10 - 3) //7
console.log(10 * 3) //30
console.log(10 / 3) //3.33...
console.log(10 % 3) //1 (remainder)
```

### Comparison operator

```javascript
var x = 5
var y = 6
console.log(5 == 6) //false
console.log(5 == '5') //true
console.log(5 == 5) //true
console.log(5 === '5') //false
console.log(5 === 5) //true
console.log(5 >= 6) //false
console.log(5 <= 6) //true
console.log(5 > 6) //false
console.log(5 < 6) //true
```

### logical AND operator

```javascript
console.log(true && true) //true
console.log(true && false) //false
console.log(false && true) //false
console.log(false && false) //false
```

### logical OR operator

```javascript
console.log(true || true) //true
console.log(true || false) //true
console.log(false || true) //true
console.log(false || false) //false
```

### logical NOT operator

```javascript
console.log(!false) //true
console.log(!true) //false
```

### postfix operators

```javascript
var num = 15
var newNum = num-- + 5
console.log(num) //14
console.log(newNum) //20
```

### prefix operators

```javascript
var num = 15
var newNum = --num + 5
console.log(num) //14
console.log(newNum) //19
```

## Chapter-2 loop

### if else statement

```javascript
const framework = 'react'

if (framework === 'react') {
  console.log('frontend')
} else if (framework === 'node') {
  console.log('backend')
} else {
  console.log('i don`t know')
}
```

### Switch case statement

```javascript
const framework = 'react'

switch (framework) {
  case 'react':
    console.log('frontend')
    break
  case 'node':
    console.log('backend')
    break
  default:
    console.log('i don`t know')
}
```

### Ternary operator

```javascript
var age = 18
console.log(age >= 18 ? 'you can vote' : "you can't vote")
```

### While loop

#### It will first meet the condition and then run logic

```javascript
var num = 20
// block scope
while (num <= 30) {
  console.log(num) //infinite loop
  num++
}
```

### Do-while loop

#### First time execute the logic and then meet the condition

```javascript
var num = 20
do {
  debugger
  console.log(num) //infinite loop
  num++
} while (num <= 30)
```

- break

```javascript
var x = 1
while (x < 10) {
  if (x === 5) {
    break
  }
  x = x + 1
  console.log(x)
}
```

- continue

```javascript
while (x < 10) {
  x = x + 1
  if (x === 5) {
    continue
  }
  console.log(x)
}
```

## Chapter-3 function

### Function

- Definition

```javascript
function sum() {
  var a = 10,
    b = 40
  var total = a + b
  console.log(total)
}
```

- function constaructor

```javascript
var func = new Function('x', 'y', 'return x*y;')

console.log(func(2, 4))
```

### There are 3 way to define function

- 1)function definition

```javascript
function sum(a, b) {
  return a + b
}
```

- 2)function expression

```javascript
const sum = function (a, b) {
  return a + b
}
```

- 3)arrow function

```javascript
const sum = (a, b) => a + b
```

- Function parament
  Function parameters are the names listed in the function's definition.

- Function arguments are the real values passed to the function.

- Function currying

```javascript
const sum = (a) => (b) => (c) => (d) => a + b + c + d;
const add = sum(5)(10)(15)(17);

console.log(add); //47
```
- inifinite currying
```javascript
function infiniteSum (a){
  return function (b){
    if(b) return infiniteSum(a+b);
    return a;
  }
}

console.log(infiniteSum(7)(8)())//15
```

- function

#### The call() method is a predefined JavaScript method.

#### It can be used to invoke (call) a method with an owner object as an argument (parameter).

```javascript
const person = {
  fullName: function () {
    return this.firstName + ' ' + this.lastName
  },
}

const myname = {
  fullName: function (person) {
    return person.firstName + ' ' + person.lastName
  },
}
const person1 = {
  firstName: 'John',
  lastName: 'Doe',
}

console.log(person.fullName.call(person1)) //John Doe
console.log(myname.fullName(person1)) //John Doe
console.log(person.fullName.apply(person1)) //John Doe
```

#### bind and apply with argument

```javascript
const person = {
  fullName: function (city, country) {
    return this.firstName + ' ' + this.lastName + ',' + city + ',' + country
  },
}

const person1 = {
  firstName: 'John',
  lastName: 'Doe',
}

console.log(person.fullName.apply(person1, ['Oslo', 'Norway'])) //John Doe,Oslo,Norway
console.log(person.fullName.call(person1, 'Oslo', 'Norway')) //John Doe,Oslo,Norway

let fullName = person.fullName.bind(person1)

console.log(fullName()) //John Doe,
```

#### The call() method `takes arguments separately.`

#### The apply() method `takes arguments as an array.`

#### In the bind() method, an `object can borrow a method from another object.`

## Chapter-4 features of ES6

- 1)let var const
- 2)template literals
- 3)dynamic object property
- 4)default parameter
- 5)fat arrow function
- 6)spread operator

#### 1)Let var and const

- Var - function scope
- Let const - block scope

#### 2)template literals

```javascript
const frontend = 'react'
const backend = 'node'
console.log(`${frontend} and  ${backend}`) //react and node
```

#### 3)dynamic object property

```javascript
let myName = 'milan'
const myBio = {
  [myName]: 'hello how are you?',
  [20 + 1]: 'is my age',
}
console.log(myBio) // { '21': 'is my age', milan: 'hello how are you?' }
```

#### 4)default parameter

```javascript
function mult(a, b = 5) {
  return a * b
}

console.log(mult(6)) //30
```

#### 5)fat arrow function

```javascript
const sum = (a, b) => a + b
```

#### 6)spread oprator

```javascript
const color = ['red', 'green', 'blue', 'white', 'pink']
const MyFavColors = [...color, 'yellow', 'black']
console.log(MyFavColors) //[ 'red',   'green', 'blue',  'white','pink',  'yellow','black']
```

## Chapter-5 string method

#### 1)escape character

```javascript
let anySentence = 'We are the so-called "Vikings" from the north.'
console.log(anySentence) //We are the so-called "Vikings" from the north.
```

#### 2)Finding method

- 1)index of

```javascript
const myData = 'hello i am milan'
console.log(myData.indexOf('am')) //8
```

- 2)last index of

```javascript
const paragraph =
  'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?'
const searchTerm = 'dog'
console.log(
  `The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(
    searchTerm,
    52,
  )}`,
)
//"The index of the first "dog" from the end is 52"
```

- 3)search

```javascript
const myBioData = 'I am the mk Technical'
let sData = myBioData.search('Technical')
console.log(sData) //12
```

#### 3)string slicing

```javascript
var str = 'my name is milan'
let res = str.slice(0, 4)
console.log(res) //my n
```

#### 4)charter at

```javascript
let str_1 = 'HELLO WORLD'
console.log(str_1.charAt(9)) //L
```

#### 5)accessing values

```javascript
var str = 'HELLO WORLD'
console.log(str[1]) //E
```

#### 6)case changing

```javascript
let Name = 'milan katira'
console.log(Name.toUpperCase()) //MILAN KATIRA
console.log(Name.toLowerCase()) //milan katira
```

#### 7)concationation

```javascript
console.log(fName.concat(' ', lName)) //milan katira
```

#### 8)trim

```javascript
var str = '              Hello         World!            '
console.log(str.trim()) //hello        world!
```

#### 9)split

```javascript
var txt = 'a, b,c d,e'
console.log(txt.split(',')) //['a', ' b', 'c d', 'e']
```

## Chapter-6 Date and time

#### Get time

```javascript
console.log(new Date()) //2022-10-30T04:41:54.992Z
console.log(new Date().toLocaleString()) //10/30/2022, 10:11:54 AM
console.log(new Date().toString()) //Sun Oct 30 2022 10:11:55 GMT+0530 (India Standard Time)
console.log(Date.now()) //1667104915026
```

#### Get year month date day

```javascript
const curDate = new Date()
console.log(curDate.getFullYear()) //2022
console.log(curDate.getMonth()) //9
console.log(curDate.getDate()) //30
console.log(curDate.getDay()) //0
```

## Chapter-7 Math in javascript

```javascript
console.log(Math.PI) //3.1415...
console.log(Math.round(Math.PI)) //3

console.log(Math.pow(2, 3)) //8
console.log(2 ** 3) //8
console.log(Math.sqrt(25)) //5

console.log(Math.abs(-55)) //55
console.log(Math.ceil(4.51)) //5
console.log(Math.round(4.51)) //5
console.log(Math.ceil(99.01)) //100
console.log(Math.round(99.1)) //99
console.log(Math.floor(4.7)) //4
console.log(Math.floor(99.1)) //99
console.log(Math.trunc(4.6)) //4
console.log(Math.trunc(-99.1)) //-99

console.log(Math.min(0, 150, 30, 20, -8, -200)) //-200
console.log(Math.max(0, 150, 30, 20, -8, -200)) //150
```

## Chapter-8 Clouser

- A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.

#### Example

```javascript
const updateCountwrapper = () => {
  let _count = 0 //it is private
  return function updateCount() {
    _count++
    console.log(_count)
  }
}
const updatedCount = updateCountwrapper() //it will return function
updatedCount() //1
updatedCount() //2
updatedCount() //3
updatedCount() //4
```

```javascript
const CardCounter = () => {
  let _count = 0
  function _updateCount(val) {
    _count += val
  }
  function _updateCount(val) {
    _count += val
  }
  return {
    increment() {
      _updateCount(1)
    },
    decrement() {
      _updateCount(-1)
    },
    value() {
      return _count
    },
  }
}
const MyCardCounter = CardCounter()
MyCardCounter.increment() //+1
MyCardCounter.increment() //+1
console.log(MyCardCounter.value()) //2
```

## Chapter-9 Hoisting

```javascript
getName() //namaste javascript
console.log(x) //undefined

var x = 7

function getName() {
  console.log('namaste javascript')
}
```

## Chapter-11 shallow copy and deep copy

- Shallow copy
  In Shallow copy, a copy of the original object is stored and only the reference address is finally copied.

- Deep copy
  In Deep copy, the copy of the original object and the repetitive copies both are stored.

```javascript
const User = {
  name: 'user',
}

// const adm = Object.assign({}, User); //shallow copy
// const adm = { ...User }; //shallow copy
const adm = JSON.parse(JSON.stringify(User)) //deepcopy

adm.name = 'adm'
console.log(User) //{ name: 'user' }
```

## Chapter-12 array

```javascript
;[3, 4, 5, 6].at(1) // 4
;[3, 4, 5, 6].pop() // [3, 4, 5]
;[3, 4, 5, 6].push(7) // [3, 4, 5, 6, 7]
;[3, 4, 5, 6].fill(1) // [1, 1, 1, 1]
;[3, 4, 5, 6].join('-') // '3-4-5-6'
;[3, 4, 5, 6].shift() // [4, 5, 6]
;[3, 4, 5, 6].reverse() // [6, 5, 4, 3]
;[3, 4, 5, 6].unshift(1) // [1, 3, 4, 5, 6]
;[3, 4, 5, 6].includes(5) // true
;[3, 4, 5, 6].map((num) => num + 6) // [9, 10, 11, 12]
;[3, 4, 5, 6].find((num) => num > 4) // 5
;[3, 4, 5, 6].some((num) => num > 5) //true
;[3, 4, 5, 6].filter((num) => num > 4) // [5, 6]
;[3, 4, 5, 6].every((num) => num > 5) // false
;[3, 4, 5, 6].findIndex((num) => num > 4) // 2
;[3, 4, 5, 6].reduce((acc, num) => acc + num) //18
```

## chapter-13 Exception handling

- try block

#### The try block can be considered the body of the statement. This is where we execute the regular code.

- catch block

#### If an exception reaches the try block, then it is assigned to the parameter of the catch clause and the code in that clause is executed. Next, execution normally continues after the try statement.

- finally block

#### The code inside the finally clause is always executed at the end of a try statement – no matter what happens in the try block or the catch clause

```javascript
function calculate() {
  try {
    const data = sub(3, 4)
    return data
  } catch (err) {
    console.log(err)
  }
}

function sub(a, b) {
  if (b > a) {
    throw new Error('b should be less than a')
  } else {
    return b - a
  }
}

calculate()
```

```javascript
function calculate() {
  try {
    const data = sub(3, 4)
    return data
  } catch (err) {
    console.log(err.message)
  } finally {
    console.log('no one can stop me')
  }
}

function sub(a, b) {
  if (b > a) {
    throw new Error('b should be less than a')
  } else {
    return b - a
  }
}

calculate()
```

## chapter-14 async javascript

#### promise

```javascript
let myPromise = new Promise(function (myResolve, myReject) {
  let x = 0

  if (x == 0) {
    myResolve('OK')
  } else {
    myReject('Error')
  }
})

myPromise.then((res) => console.log(res)).catch((err) => console.log(err))
```

#### await async

```javascript
const data = async function myFunction() {
  return 'Hello'
}

const datas = function myFunction() {
  return Promise.resolve('Hello')
}

console.log(data()) //promise
console.log(datas()) //promise

data().then((res) => console.log(res))

function myFunction() {
  return 'Hello'
}

console.log(myFunction())
```

#### promise all

```javascript
const promise1 = Promise.resolve(3)
const promise2 = 42
const promise3 = async () => {
  return 'data'
}
Promise.all([promise1, promise2, promise3()]).then((values) => {
  console.log(values)
})
```

#### promise resolve

```javascript
const promise3 = async () => {
  return 'data'
}
Promise.resolve(promise3()).then((values) => {
  console.log(values)
})
```

#### ch-15 generator function

```javascript
function* simpleGenerator() {
  console.log('function called')
  yield 'first step'
  let x = 40
  yield x
  yield 'last step'
}

let sG = simpleGenerator()
console.log(sG.next())
console.log(sG.next())
console.log(sG.next())
console.log(sG.next())
// function called
// { value: 'first step', done: false }
// { value: 40, done: false }
// { value: 'last step', done: false }
// { value: undefined, done: true }
```
