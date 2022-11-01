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
console.log(5 == '5'); //true
console.log(5 == 5);  //true
console.log(5 === "5"); //false
console.log(5 === 5); //true
console.log(5 >= 6); //false
console.log(5 <= 6); //true
console.log(5 > 6);  //false
console.log(5 < 6); //true
```

### logical AND operator
```javascript
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true);  //false
console.log(false && false);  //false
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
console.log(newNum);  //19
```