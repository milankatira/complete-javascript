//TODO:it is changed because of it`s reference copy 
let obj = {
  name: "peter",
};

let user = obj;

user.name = "jack";

console.log(obj.name); //jack

//TODO:it is not changed because of it`s value copy

let obj2 = {
  name: "peter",
};

let user1 = JSON.stringify(obj2);

user1.name = "jack";

console.log(obj2.name); //peter

//TODO:it will not happen with string
let x = "mk";
let y = x;

y = "km";

console.log(x); //mk

//TODO:copy method

const User = {
  name: "user",
};

// const adm = Object.assign({}, User); //shallow copy
// const adm = { ...User }; //shallow copy
const adm = JSON.parse(JSON.stringify(User)); //deepcopy

adm.name = "adm";
console.log(User); //{ name: 'user' }
