//~javascript array

const cars = ["Saab", "Volvo", "BMW"];


//TODO ARRAY TO STRING
const fruits = ["Banana", "Orange", "Apple", "Mango"];

const sfruits = fruits.toString();

console.log(sfruits)
//Banana,Orange,Apple,Mango

//TODO ARRAY JOIN
const arrayjoint = fruits.join(" * ");
console.log(arrayjoint)
//Banana*Orange*Apple*Mango

//TODO ARRAY POP
console.log(cars.pop());
//BMW

//TODO ARRAY PUSH
console.log(cars.push("suzuki"))
//3

console.log(cars)
//[ 'Saab', 'Volvo', 'suzuki' ]

//TODO ARRAY SHIFT

console.log(cars.shift())
//[ 'Banana' ]

console.log(cars.unshift('suzuki'))

console.log(cars)

//TODO ARRAY LEGTH APPEND 
cars[cars.length] = "tata"

cars[cars.length] = "volvo"

console.log(cars)

//TODO ARRAY SPLICE
const fruit = ["Banana", "Orange", "Apple", "Mango"];
var d_fruit = fruit.splice(2, 0, "Lemon", "Kiwi");

var d_fruit = fruit.splice(1)

console.log(fruit)

//TODO The first parameter (2) defines the position where new elements should be added (spliced in).
//TODO second parameter (0) defines how many elements should be removed.
//TODO rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
//TODO splice() method returns an array with the deleted items:

//TODO ARRAY CONCAT

const merge = fruit.concat(cars)

console.log(merge)

//TODO CONSTUCTOR

console.log(merge.constructor)

//TODO COPY WITH 

console.log(merge.copyWithin(2, 0))

//TODO EVERY
const ages = [32, 33, 16, 40];

console.log(ages.every(checkAge))

function checkAge(age) {
    return age > 18;
}

//TODO FILL
ages.fill(11)
console.log(ages)

//TODO FILTER

const age = [52, 41, 74, 21, 12, 30]
console.log(age.filter(checkAdult))

function checkAdult(age) {
    return age >= 18;
}

//TODO FIND
console.log(age.find(checkAdult))

//TODO FIND INDEX
console.log(age.findIndex(checkAdult))

//TODO FROM
console.log(Array.from("ABCDEFG"))

//TODO INCLUDES
console.log(age.includes(74))

//TODO INDEX OF
console.log(age.indexOf(74))

//TODO REDUCES
const numbers = [175, 50, 25, 50, 10];

function myFunc(total, num) {
    return total - num;
}

console.log(numbers.reduce(myFunc))

console.log(numbers.reduceRight(myFunc))

//TODO REVERSE
console.log(numbers.reverse())

