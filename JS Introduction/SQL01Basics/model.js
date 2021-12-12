const Seqeulize = require('sequelize')
const DataTypes = Seqeulize.DataTypes

const { db } =require('./connect')

/*
db.authenticate()
    .then(() => console.log("Connection worked"))
    .catch((err)=> console.log(err))
*/

// Connect Part

const Person =db.define('persons1',{
    name:{
        type:DataTypes.STRING(40),
        allowNull: false
    },
    age:{
        type:DataTypes.INTEGER(2),
        allowNull: false,
        defaultValue: -1
    },
    city: {
        type:DataTypes.STRING(40),
        allowNull: false
    }
})

/*const task = async() => {
    try{
        await  db.sync({alter: true})
        
        //Insert a student

        await Person.create({
            name:'Some Person',
            age: 20,
            city:'Some City'
        })

    }
    catch(e){
        console.log(e)
    }
}

task();*/

db.sync({alter:true})
    .then(()=>console.log('Database synchronized'))
    .catch(console.error)

//Model Part

module.exports ={
    Person
}
