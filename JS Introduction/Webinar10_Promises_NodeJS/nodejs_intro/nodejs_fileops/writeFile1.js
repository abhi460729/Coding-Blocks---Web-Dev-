const fs = require('fs')

fs.writeFile(__dirname+'/myfile1.txt',`cat
dog
fish`,function(err){
    if(err)throw err
    console.log('File 1 was written')
})