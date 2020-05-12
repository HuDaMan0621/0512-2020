// const math = require("./math")
// const addNumbers = math.add(`process.argv[3] + process.argv[4] + process.argv[5]`);
// console.log(addNumbers)


// console.log(process.argv);
var result = 0 //default result is 0

for (var i = 2; i < process.argv.length; i++) //start counting from index 2 
  result += Number(process.argv[i])  //result from the 3rd index to nth(input) index
//Number is the keyword to make strings into numbers.... 

console.log(result) //print result

// console.log(number);
// // process.argv;
// // function number() {
// //     number(process.argv[3]+ number)
// // }
// const grab = flag => {
//     let indexAfterFlag = process.argv.indexOf(flag) + 1; 
//     return process.argv[indexAfterFlag];
// };

// const greeting = grab("--greeting");
// const user = grab("--user");

// console.log(`${greeting} ${user}`);


// function sum ( x, y ){
//     process.stdout = x;
//     process.stdout = y;
//     process.argv[3] + process.argv[4];
// }   
// sum(x,y);


// You'll need to think about how to loop through the number arguments so  
// you can output just their sum. The first element of the process.argv array  
// is always 'node', and the second element is always the path to your  
// baby-steps.js file, so you need to start at the 3rd element (index 2),  
// adding each item to the total until you reach the end of the array.  
 
// Also be aware that all elements of process.argv are strings and you may  
// need to coerce them into numbers. You can do this by prefixing the  
// property with + or passing it to Number(). e.g. +process.argv[2] or  
// Number(process.argv[2]).  