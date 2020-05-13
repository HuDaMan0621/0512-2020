const fs = require('fs');
const path = require('path');

const tmpHolderforfilePathAt2ndIndexofProcessargv = process.argv[2];
const tmpHolderforfileExtensionsAndWeNeedItLater = process.argv[3];

// function callback (err, list) { /* ... */ }  
fs.readdir(tmpHolderforfilePathAt2ndIndexofProcessargv, (err, list) => {
    if(err) {
        console.log('Error: ', err) //throws an error if something happens.
    } else {  //if nothing do this 
        list.forEach((file) => {    //forEach prints the information in the array into a string. 
          if ("." + tmpHolderforfileExtensionsAndWeNeedItLater === path.extname(file)) { //check to see if the file extension is equal **extname is the keyword
            
                console.log(file)
          } 

        })

    };


});