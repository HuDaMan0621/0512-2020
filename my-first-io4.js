const fs = require("fs");

const tempHolder = process.argv[2];

const readInformation = fs.readFileSync(tempHolder, "UTF-8");

// console.log(readInformation);
const splitLine = readInformation.split('\n');

console.log(splitLine);
console.log(splitLine.length - 1); // count the lines, -1 is minus the first count.  