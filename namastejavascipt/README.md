# namaste-javascript

this is all lecture not of Akshay saini

## ch-1 Execution Context

- Everything in JS happens inside the execution context. Imagine a sealed-off container inside which JS runs. It is an
  abstract concept that hold info about the env. within the current code is being executed.

- In the container the first component is `memory component` and the 2nd one is `code component`

- Code component is the place where code is executed one line at a time. It is also called the `Thread of Execution`.

- JS is a synchronous, single-threaded language
  - Synchronous:- One command at a time.
  - Single-threaded:- In a specific synchronous order.

## ch-2 How JS is executed & Call Stack

- When a JS program is ran, a `global execution context` is created.

- The execution context is created in two phases.

  - `Memory creation phase` - JS will allocate memory to variables and functions.
  - `Code execution phase`

- Javascript manages code execution context creation and deletion with the the help of `Call Stack`.

## ch-3 Hoisting in JavaScript (variables & functions)

- `Hoisting` is a concept which enables us to extract values of variables and functions even before
  initialising/assigning value without getting error and this is happening due to the 1st phase (memory creation
  phase) of the Execution Context.

## ch-4 Shortest JS Program, window & this keyword

- The shortest JS program is `empty file.` Because even then, JS engine does a lot of things. As always, even in this
  case, it creates the GEC which has memory space and the execution context.

- JS engine creates something known as `window`. It is an object, which is created in the global space. It contains lots
  of functions and variables. These functions and variables can be accessed from anywhere in the program. JS engine
  also creates a `this` keyword, which points to the `window` object at the global level. So, in summary, along with `GEC`,
  `a global object (window) and a this variable are created`.

- If we create any variable in the global scope, then the variables get attached to the global object.

```javascript
var x = 10;
console.log(x); // 10
console.log(this.x); // 10
console.log(window.x); // 10
```

## ch-5 undefined vs not defined in JS

- In first phase (memory allocation) JS assigns each variable a placeholder called `undefined.`

- undefined is when memory is `allocated for the variable`, but no value is assigned yet.

- If an object/variable is `not even declared/found in memory allocation phase`, and tried to access it then it is `Not defined`

## ch-6 The Scope Chain, Scope & Lexical Environment

- `Scope` in Javascript is directly related to `Lexical Environment`.

```javascript
// case -1
function a() {
  console.log(b); // 10
  // Instead of printing undefined it prints 10, So somehow this a function could access
  // the variable b outside the function scope.
}

var b = 10;

a();
```

```javascript
// CASE 2
function a() {
  c();
  function c() {
    console.log(b); // 10
  }
}
var b = 10;
a();
```

```javascript
function a() {
  c();
  function c() {
    var b = 100;
    console.log(b); // 100
  }
}
var b = 10;
a();
```

```javascript
function a() {
  var b = 10;
  c();
  function c() {
    console.log(b); // 10
  }
}
a();
console.log(b);
```

- In `case 1`: function a is able to access variable b from Global scope.
- In `case 2`: 10 is printed. It means that within nested function too, the global scope variable can be accessed.
- In `case 3`: 100 is printed meaning local variable of the same name took precedence over a global variable.
- In `case 4`: A function can access a global variable, but the global execution context can't access any local
  variable.

## ch-7 let & const in JS, Temporal Dead Zone

- `let` and `const` declarations are hoisted. But its different from `var`

```javascript
console.log(a); // ReferenceError: Cannot access 'a' before initialization
console.log(b); // prints undefined as expected
let a = 10;
console.log(a); // 10
var b = 15;
console.log(window.a); // undefined
console.log(window.b); // 15
```

- Both `a` and `b` are actually initialized as `undefined` in hoisting stage. But var `b` is inside the `storage space of GLOBAL`,
  and `a` is in a `separate memory object called script`, where it can be `accessed only after assigning some value to it`
  first ie. one can access 'a' only if it is assigned. Thus, it throws error.

- `Temporal Dead Zone` : Time since when the let variable was hoisted until it is initialized some value.

  - So any line till before "let a = 10" is the TDZ for `a`
  - `Since a is not accessible on global`, its not `accessible in window/this also`. window.b or this.b -> 15; But
    window.a or this.a ->undefined, just like window.x->undefined (x isn't declared anywhere)

- `Let` is a stricter version of `var`. Now, `const` is even more stricter than `let`.

## ch-7 Closures in JS

- Function bundled along with it's lexical scope is `closure`.

```javascript
function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  return y;
}
var z = x();
console.log(z);
```

```javascript
function z() {
  var b = 900;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}
z(); // 7 900
```

```javascript
*A closure is a function that has access to its outer function scope even after the function has returned.
Meaning, A closure can remember and access variables and arguments reference of its outer function even
after the function has returned.*
```

- Advantages of Closure:

  - Module Design Pattern
  - Currying
  - Memoize
  - Data hiding and encapsulation
  - setTimeouts etc.

- Disadvantages of Closure
  - Over consumption of memory
  - Memory Leak
  - Freeze browser

## ch-8 Famous Interview Questions ft. Closures

- What is Closure in Javascript?
- A function along with reference to its outer environment together forms a closure. Or in other words, A Closure is a
  combination of a function and its lexical scope bundled together.

- Will the below code still forms a closure?

```javascript
function outer() {
  function inner() {
    console.log(a);
  }
  var a = 10;
  return inner;
}
outer()(); // 10
```

- Yes, because inner function forms a closure with its outer environment so sequence doesn't matter.

- Changing var to let, will it make any difference?
- It will still behave the same way.

- Will inner function have the access to outer function argument?

```javascript
function outer(str) {
  let a = 10;
  function inner() {
    console.log(a, str);
  }
  return inner;
}
outer("Hello There")(); // 10 "Hello There"
```

- Inner function will now form closure and will have access to both a and b

- Output of below code

```javascript
function outest() {
  var c = 20;
  function outer(str) {
    let a = 10;
    function inner() {
      console.log(a, c, str);
    }
    return inner;
  }
  return outer;
}
let a = 100;
outest()("Hello There")(); // 10 20 "Hello There"
```

- Difference between function statement and expression

```javascript
a(); // "Hello A"
b(); // TypeError
function a() {
  console.log("Hello A");
}
var b = function () {
  console.log("Hello B");
};
// Why? During mem creation phase a is created in memory and function assigned to a. But b is created like a variable (b:undefined) and until code reaches the function() part, it is still undefined. So it cannot be called.
```

- What is Anonymous Function?

```javascript
function(){

} // this is going to throw Syntax Error - Function Statement requires function name.
```

- Parameters vs Arguments?

```javascript
var b = function (param1, param2) {
  // labels/identifiers are parameters
  console.log("b called");
};
b(arg1, arg2); // arguments - values passed inside function call
```

## ch-9 Callback Functions in JS ft. Event Listeners

- Callback functions

- Functions are first class citizens ie. take a `function A` and pass it to another `function B`. Here,`A is a callback function.`
  So basically I am giving access to function B to call function A. This callback function gives us the access to whole
  Asynchronous world in Synchronous world.

```javascript
setTimeout(function () {
  console.log("Timer");
}, 1000); // first argument is callback function and second is timer.
```

- Event Listener

- We will create a button in html and attach event to it.

```javascript
// index.html
<button id="clickMe">Click Me!</button>;
// in index.js
document.getElementById("clickMe").addEventListener("click", function xyz() {
  //when event click occurs, this callback function (xyz) is called into callstack
  console.log("Button clicked");
});
```
