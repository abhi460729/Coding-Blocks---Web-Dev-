const express = require('express')

const app=express()


// Way to parse the body
app.use(express.urlencoded({extended: true}))

app.get('/',(req,res)=>{
    res.send('<h1 style="color: red">Hello World</h1>')
})

// Way to access the params
// localhost:4444/{x}/{y}
app.get('/:city/:greeting',(req,res)=>{
    res.send(req.params.greeting+ ' to '+ req.params.city + '!')
})

//How to handle path parameters
app.get('/:person/:action',(req,res)=>{
    res.send('Thank you '+req.params.person+ ' for '+ req.params.action)
})

//How to handle query parameters
app.get('/greet',(req,res)=>{
    let person='Guest'
    console.log(req.body)
    if(req.query.person)
        person=req.query.person
    res.send('Good Morning ' + person)
})

//How to handle parameters that rae comiung inside the body
app.post('/greet',(req,res)=>{
    let person='Guest'
    console.log(req.body)
    if(req.body.person)
        person=req.body.person
    res.send('Good Evening ' + person)
})

/*app.get('/form',(req,res)=>{
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <form>
            <input>
            <input>
            <button type="submit">SUBMIT</button>
        </form>
    </body>
    </html>`)
})*/

app.get('/form',(req,res)=>{
    res.sendFile(__dirname + '/files/form.html')
})

app.listen(4445,()=>{
    console.log('server started on http://localhost:4445')
})

//0-1024 ports are reserved ports
