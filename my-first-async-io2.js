const fs = require('fs');

const informationHolder = process.argv[2];

fs.readFile(informationHolder, (err, data) => {
    //data can only be read in this bracket 
    if (err) {
        console.log('Error :', err);
        return; 
    }

    const readData = data.toString();
    const cutInLines = readData.split('\n');
    console.log(cutInLines.length - 1);

})