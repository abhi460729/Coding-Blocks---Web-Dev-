const mysql = require('mysql2')

const connection = mysql.createConnection({
    host:'localhost',
    database: 'mytestdb',
    user: 'myuser',
    password: 'mypass'
})

const insert ={
    //process.argv[o] is node
    //process.argv[1] is the name of the file itself
    name:process.argv[2],
    age: parseInt(process.argv[3]),
    city: process.argv[4]
}

connection.query(
    `INSERT INTO persons (name,age,city) VALUES (
        '${insert.name}',${insert.age},'${insert.city}'
    )`,function(err,results){
        if(err){
            console.log(err)
        }
        else{
            console.log(results)
            console.log("Inserted successfully")
        }
        connection.close();
    }
)