//TODO A closure is the combination of a function bundled together 
//TODO (enclosed) with references to its surrounding state (the lexical environment). 
//TODO In other words, a closure gives you access to an outer function's scope from an inner function

//!we are calling function y inside the function x
function x(){
   var a=7;
   return function y(){
      console.log(a);
   }
}

//!z is a function x 
var z=x()  

console.log(z); //?function y

z(); //? 7