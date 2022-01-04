const user = require('../../db').User
const route = require('express').Router()
const db = require('../../db').db

route.get('/',(req,res)=>{
    //We want to send an array of all users
    //From our db
    user.findAll()
        .then((users)=>{
            res.status(200).send(users)
        })
        .catch((err)=>{
            res.status(500).send({
                error:"Could not retrive users"
            })
        })   
})

route.post('/',(req,res)=>{
    //We expect the req to have name in it
    //We will create a new user

    user.create({
        name: req.body.name
    }).then((user) => {
        res.status(201).send(user)
    }).catch((err)=>{
        res.status(501).send({
            error:"Could not add new user"
        })
    })
})

db.sync()
    .then(()=>console.log("database has been synced"))
    .catch((err)=>console.error("error creating database"))

exports = module.exports = route