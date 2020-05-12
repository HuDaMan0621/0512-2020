const filterFileName = require('./mymodule');

filterFileName(process.argv[2], process.argv[3], (err, data) => {
    if (err) {
        console.log('error: ', err)
        return;
    }

    data.forEach((filename) => {
        console.log(filename);
    });
})
