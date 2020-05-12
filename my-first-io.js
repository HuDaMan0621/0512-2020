const fs = require("fs")

const filePath = process.argv[2];

const fileBuffer = fs.readFileSync(filePath, "UTF-8"); //readFileSync returns contents, therefore, we will need a holder(fileContents) to hold it 

// console.log(fileBuffer);

const fileContent = fileBuffer.toString();

const lines = fileContent.split('\n'); //look through the new lings

console.log(lines.length - 1);



// console.log(fileContents.toString()):  //toString will print the buffer to the string. 

// const str = buf.toString()