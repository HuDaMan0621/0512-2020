const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];
const ext = process.argv[3];

fs.readdir(filePath, (err, list) => {
    // console.log(filePath);
    if (err) {
        console.log('Error: ', err);
        return;
    } else {
        list.forEach((file) => {

            if ('.' + ext === path.extname(file)){
                console.log(file)
            }
            
        })
    }
    
    // const list = fileList.filter((file) => {
    //     return path.extname(file) === '.' + ext;
    // });
    // list.forEach((file) => {
    //     console.log(file);
    //     // if('.' + ext === path.extname(file)) {
    //     //     console.log(file);
    // })
});
// });

// array1.forEach(element => console.log(element));
// const fs = require("fs");

// fs.readFile("./assets/alex.jpg", (err, img) => {
//   if (err) {
//     console.log(`An error has occured: ${err.message}`);
//     process.exit();
//   }
//   console.log("file contents read");
//   console.log(img);
// });
