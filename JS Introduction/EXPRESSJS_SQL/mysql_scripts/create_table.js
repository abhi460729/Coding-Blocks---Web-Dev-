const mysql = require('mysql2')

const connection = mysql.createConnection({
    host:'localhost',
    database: 'mytestdb',
    user: 'myuser',
    password: 'mypass'
})
connection.query(
    `CREATE TABLE persons (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(50) NOT NULL,age INT NOT NULL,city VARCHAR(30))`,function(err,results){
        if(err){
            console.log(err)
        }
        else{
            console.log("Table created successfully")
        }
        connection.close();
    }
)