const fs = require('fs');


const infoHolder = process.argv[2];
//   function callback (err, data) { /* ... */ } 

fs.readFile(infoHolder, (err, data ) => {
    if (err) {
        console.log('Error :', err);
        return;
    }

    const printData = data.toString();
    const cutItUp = printData.split('\n');
    console.log(cutItUp.length - 1); 

})

//call back functionm, alway error first 
