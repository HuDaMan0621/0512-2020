const fs = require('fs')

const filePath = process.argv[2];
//Remember that idiomatic Node.js callbacks normally have the signature:    
//function callback (err, data) { /* ... */ }  

fs.readFile(filePath, (err, data) => {     
    //the data needs to be happened in here   
    if (err) {
        console.log('Error: ', err);
        return;
    }

    const fileContents = data.toString();
    
    const line = fileContents.split('\n');
    
    console.log(line)
    
    console.log(line.length - 1 );
});

// console.log(fileContents);

// const str = process.argv.toString();

// console.log(str);


// console.log(line);

