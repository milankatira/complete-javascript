//time in JavaScript

// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// it takes 7 arguments
// new Date(milliseconds)
// we cannot avoid month section 
// new Date(date string)
console.log("------------------------------------currdate------------------------")
// let currDate = new Date(); 
// console.log(currDate);
console.log("------------------------------------date to localstring--------------")
console.log(new Date()); //2022-10-30T04:41:54.992Z
console.log(new Date().toLocaleString()); //10/30/2022, 10:11:54 AM
console.log(new Date().toString()); //Sun Oct 30 2022 10:11:55 GMT+0530 (India Standard Time)
console.log(Date.now()) //1667104915026
console.log("------------------------------------tostring-------------------------")
console.log("------------------------------------date.now-------------------------")
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
console.log("------------------------------------individual value--------------")
const curDate = new Date();
console.log(curDate.getFullYear()); //2022
console.log(curDate.getMonth()); //9
console.log(curDate.getDate()); //30
console.log(curDate.getDay());  //0
console.log(curDate.toLocaleString());

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