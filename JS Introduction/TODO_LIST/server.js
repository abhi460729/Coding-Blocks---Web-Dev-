const express=require('express')
const app=express()

app.use(express.urlencoded({extended: true}))
app.set('view engine','hbs')

let tasks = [
    'sample task'
]

/*
app.get('/',(req,res)=>{
    let tasklist=tasks.map(t => `<li>${t}</li>`).join('\n')
    res.send(`
        <html>
            <body>
                <form action="/" method="POST">
                    <input name="newtask">
                    <button type="submit">ADD</button>
                </form>
                <ul>
                    ${tasklist}
                </ul>
            </body>
        </html>
    `)
})
*/
//HBS Rendering i.e. Handlebars
app.get('/',(req,res)=>{
    res.render('home', {
        title:'Todo List',
        tasks
    })
})

app.post('/',(req,res)=>{
    tasks.push(req.body.newtask)
    res.redirect('/')
})

app.listen(5555,()=>{
    console.log('started')
})