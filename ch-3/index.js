//~function
function sum(){
  var a = 10, b = 40;
  var total = a+b;
  console.log(total);
}
//~functoion calling
//sum();

//~Function Parameter vs Function Arguments
// !Function parameters are the names listed in the function's definition.
// ! arguments are the real values passed to the function.

//!a,b  parameters
function sum(a,b){
  var total = a+b;
  console.log(total);
}

//!arguments
sum();
sum(20,30);
sum(50,50);
sum(5,6)


function sum(a,b){
  var total = a+b;
  console.log(total);
}

var funExp = sum(5,15);

function sum(a,b){
  return total = a+b;
}

var funExp = sum(5,25);

console.log('the sum of two no is ' + funExp );

//!anonymous functions

var funExp = function(a,b){
  return total = a+b;
}

var sum = funExp(15,15);
var sum1 = funExp(20,15);

console.log(sum > sum1 );