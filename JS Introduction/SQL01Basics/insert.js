const { db } =require('./connect')
const {Person} =require('./model')

const task = async() => {
    try{
        await  db.sync({alter: true})
        
        //Insert a person

        await Person.create({
            name:'Some Person',
            age: 80,
            city:'Some City'
        })


    }
    catch(e){
        console.log(e)
    }
}

task();