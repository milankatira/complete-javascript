//time in JavaScript

// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// it takes 7 arguments
// new Date(milliseconds)
// we cannot avoid month section 
// new Date(date string)
console.log("------------------------------------currdate------------------------")
let currDate = new Date(); 
console.log(currDate);
console.log(new Date());
console.log("------------------------------------date to localstring--------------")
console.log(new Date().toLocaleString());
console.log("------------------------------------tostring-------------------------")
console.log(new Date().toString());
console.log("------------------------------------date.now-------------------------")
console.log(Date.now() )
//milliseconds elapsed since January 1, 1970 00:00:00 UTC

// new Date(year, month, ...) 
// 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order)
//Note: JavaScript counts months from 0 to 11.
console.log("------------------------------------date to localstring example--------------")
var d = new Date(2021,14,4,10,33,30,0);
console.log(d.toLocaleString());

var d = new Date(2020);
console.log(d.toLocaleString());

//how to get the indivisual date
const curDate = new Date();
console.log(curDate.toLocaleString());
console.log("------------------------------------individual value--------------")
console.log(curDate.getFullYear());
console.log(curDate.getMonth()); 
console.log(curDate.getDate());
console.log(curDate.getDay());

console.log("-------------------------------- set individual value--------------")
//how to set the indivisual date 
console.log(curDate.setFullYear(2022));
console.log(curDate.setFullYear(2022,1, 5));

//Time Methods
const curTime = new Date();
//how to get the indivisual Time 

console.log("------------------------------------get time --------------")
console.log(curTime.getTime());
//The getTime() method returns the number of milliseconds 

//since January 1, 1970
console.log(curTime.getHours());
//The getHours() method returns the hours of a date as a 

console.log(curTime.getMinutes());
console.log(curTime.getSeconds());
console.log(curTime.getMilliseconds());

console.log("------------------------------------set time --------------")
let curtime = new Date();
console.log(curtime.setTime());
console.log(curtime.setHours(5));
console.log(curtime.setMinutes(5));
console.log(curtime.setSeconds(5));
console.log(curtime.setMilliseconds(7));