// if we are getting proxy error while installing npm then we need to run this command npm cache clean --force and then run npm install express
// Tutorial is about how middlewares work and how routers work.
const express=require('express')

const app=express()

app.get('/hello',(req,res)=>{
    res.send('Hello World')
})


//We are mounting the public folder on xyz path i.e. all the files within this folder xyz is accessible via path /xyz
//By default there is a convension that if we open a folder then index.html inside that folder will open if it exists or else it will not open
app.use('/xyz',express.static(__dirname + '/public'))

app.listen(4321,()=>{
    console.log('servar started on http://localhost:4321')
})