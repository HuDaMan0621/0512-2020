const fs = require("fs");

const fileContent = process.argv[2];

const fileRead = fs.readFileSync(fileContent, "UTF-8");

console.log(fileRead);