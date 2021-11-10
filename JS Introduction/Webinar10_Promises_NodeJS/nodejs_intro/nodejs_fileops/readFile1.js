const fs = require('fs')

fs.readFile(__dirname+'/myfile1.txt',function(err,data){
    if(err) throw err;
    console.log(data.toString())
})