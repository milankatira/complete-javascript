//TODO currying 


// console.log(sum(5)(8)(7)(2))

// function sum(a) {
//     return function sum(b) {
//         return function sum(c) {
//             return function sum(d) {
//                 console.log(a + b + c + d);
//             }
//         }
//     }
// }

// sum(5)(10)(9)(11)

const sum = (a)=>(b)=>(c)=>(d)=>a+b+c+d;

const add = sum(5)(10)(15)(17);
console.log(add);