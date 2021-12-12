const Seqeulize = require('sequelize')

const db = new Seqeulize('mytestdb','myuser','mypass',{
    host:'localhost',
    dialect:'mysql',
})

module.exports ={
    db
}