const express = require('express')
const path = require('path')
const app = express();
const SERVER_PORT = process.env.PORT || 3307

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/api',require('./routes/api').route)

app.listen(SERVER_PORT, ()=>console.log('Server started at http://localhost:3307'))

