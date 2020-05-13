const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];
const ext = process.argv[3];

fs.readdir(filePath, (err, list) => {
    if(err) {
        console.log('Error: ', err)
    } else {
        // console.log(list);
        list.forEach((file) => {  //print string!! not an array! oh yeah!!!! got it!!!!
            if ('.' + ext === path.extname(file)) { //check to see if the ext is matching the path.extname (file)
                console.log(file); //if it does, print the file. 
            }

        })
    }
})
