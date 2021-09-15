//!string 

//~length
console.log("---------------------length-------------------")
let myName = "milam";
console.log(myName.length);

console.log("---------------------Escape Character-------------------")
//~Escape Character
let anySentence = "We are the so-called \"Vikings\" from the north.";
console.log(anySentence);

console.log("---------------------finding -------------------")
//~find string 
const mydata= 'hello i am milan';
console.log("---------------------index of-------------------")
console.log(mydata.indexOf('am'));

console.log("---------------------last index of-------------------")
console.log(mydata.lastIndexOf("e",8));

console.log("---------------------search-------------------")
const myBioData =  'I am the mk Technical';
let sData = myBioData.search("Technical");
console.log(sData);

console.log("---------------------string slicing-------------------")
//~string slicing 
var str="my name is milan"
let res=str.slice(0,4);
console.log(res);

console.log("---------------------indexing(charAt)-------------------")
//~indexing
let str_1 = "HELLO WORLD";
console.log(str_1.charAt(9));

console.log( str_1.charCodeAt(0) );//return unicode

//~property access
console.log("---------------------property access-------------------")
var str = "HELLO WORLD";
console.log(str[1]);

console.log("---------------------usefull method-------------------")
//~usefull method
let Name = "milan katira";
console.log(Name.toUpperCase()); 
console.log(Name.toLowerCase());

console.log("---------------------str concatination-------------------")
//~string concatenation
let fName = "milan"
let lName = "katira"
console.log(fName + lName );
console.log(`${fName} ${lName}`);
console.log(fName.concat(lName));
console.log(fName.concat(" " ,lName));

//milankatira
//milan katira
//milankatira
//milan katira
console.log("---------------------str trim-------------------")
//~String.trim() 
var str = "              Hello         World!            ";
console.log(str.trim());

console.log("---------------------length to Array -----------------")
//~string to array
var txt = "a, b,c d,e";   // String
console.log(txt.split(","));           // Split on commas
console.log( txt.split(" "));          // Split on spaces

console.log(txt.split("|"));         // Split on pipe