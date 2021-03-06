const express = require('express')
const todoRoute = require('./routes/todos')

const srv = express()

srv.set('view engine','hbs')
srv.set('views', __dirname + "/views")
srv.use(express.json())
srv.use(express.urlencoded({extended:true}))

srv.use('/todos',todoRoute)

srv.listen(3457)
//We will not create an API we are going a html page when we receive a request
