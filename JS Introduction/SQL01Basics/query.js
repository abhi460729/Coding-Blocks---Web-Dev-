const { db } =require('./connect')
const { Person } = require('./model')

const task =async()=>{
    try{
        await db.sync()

        const persons= await Person.findAll({
            where: {
                age:{
                    $or:{
                        $ls: 10,
                        $gt: 15
                    }
                }
            },
            order: [
                ['age','DESC'],
                ['name','ASC'],
            ]
        })

        persons.forEach(s => {
            console.log(`
            name:${s.dataValues.name} \t \t age: ${s.dataValues.age}
            `)
        });

        console.log(persons)
    }catch(e){
        console.log(e)
    }
}

task();
//Sequealize is a completely promise based ORM