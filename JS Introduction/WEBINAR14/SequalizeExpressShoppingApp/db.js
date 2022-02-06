const Sequelize = require('sequelize')

// const db = new Sequelize('shopdb','shopper','shoppass',{
//     host: 'localhost',
//     dialect: 'mysql',
//     pool: {
//         min: 0,
//         max: 5,
//     }
// })


const db = new Sequelize('heroku_f8835ed769540c8','b9d1edac1dc450','fa2396ff',{
    host: 'us-cdbr-east-05.cleardb.net',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
    }
})

const User = db.define('users',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    }
})

const Product = db.define('products',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull:false
    },
    manufacturer: Sequelize.STRING,
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    }
})


exports = module.exports = {
    User, Product, db
}