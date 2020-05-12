const fs = require('fs');
const path = require('path');

function filterFolderNames(dirName, ext, callback) {
    
    fs.readdir(dirName, (err, list) => {
        if(err){
            callback(err);
            return;
        }
        
        list.forEach((file) => {
            // console.log("file path: ", filePath);
            // console.log("ext: ", ext);
            // ext = html
            //path .extname (file ) ==.html
            // console.log(file);

            if('.'+ext === path.extname(file)) {
                console.log(file);
            } else {
              return false
            };
            
        });

    });
};

module.exports = filterFolderNames;