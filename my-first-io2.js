const fs = require('fs')

const filePath = process.argv[2];

const fileBuffer = fs.readFileSync(filePath, "UTF-8");

const line = fileBuffer.split('\n');


// const fileContents = fileBuffer.toString();

// console.log(fileContents);

// const str = process.argv.toString();

// console.log(str);


// console.log(line);

console.log(line.length - 1 );