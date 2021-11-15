const mysql=require('mysql2')

const connection =mysql.createConnection({
    host:'localhost',
    user:'myuser',
    password:'mypass',
    database:'mytestdb'
})

function getAllPersons(){
    return new Promise(function (resolve,reject){
        connection.query(
            `SELECT * FROM persons`,
            function(err,rows,cols){
                if(err){
                    reject(err)
                }
                else{
                    resolve(rows)
                }
            }
        )
    })
}

function addNewPerson(name,age,city){
    return new Promise(function (resolve,reject){
        connection.query(
            `INSERT INTO persons (name,age,city) VALUES (?,?,?)`,
            [name,age,city],
            function(err,results){
                if(err){
                    reject(err)
                }
                else{
                    resolve()
                }
            }
        )
    })
}

/*
If the data is entered from the front end as xyz, ;DROP TABLE PERSONS; abc
then the sql query formed will be
insert into persons(name,age,city)
values(xyz,DROP TABLE PERSONS;,abc)

If the above formed query is executed then the entire table will get dropped and this is known as SQL Injection Attack

This kind of a problem can be removed using sanitization. We make use of an array [value1, value2, value3]. So what we do here is we make sure that the values are safe i.e. it does not contain ;.
*/

exports = module.exports ={
    getAllPersons,
    addNewPerson
}