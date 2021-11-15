const express = require('express')
const app = express()
const db= require('./db0')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set("view engine","hbs")

//APPROACH 0: It has only server.js and db.js
app.get('/',(req,res)=>{
    db.getAllPersons()
    .then((persons)=>{
        res.render('persons',{persons})
    })
    .catch((err)=>{
        res.send(err)
    })
})

app.post('/add',(req,res)=>{
    db.addNewPerson(req.body.name,req.body.age,req.body.city)
        .then(()=>{
            res.redirect('/')
        })
        .catch((err)=>{
            res.send(err)
        })
})

app.get('/add',(req,res)=>{
    res.render('persons_add')
})

app.listen(4444,()=>{
    console.log("Server started on http://localhost:4444/")
})