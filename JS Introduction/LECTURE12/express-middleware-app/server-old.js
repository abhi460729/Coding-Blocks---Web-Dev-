const express=require('express')

const app=express()

function m1(req,res,next){
    console.log('m1 pre-next')
    next()
    console.log('m1 post-next')
}

function m2(req,res,next){
    console.log('m2 pre-next')
    next()
    console.log('m2 post-next')
}

function m3(req,res,next){
    console.log('m3 pre-next')
    next()
    console.log('m3 post-next')
}

/*
function m1(req,res,next){
    console.log('running middleware 1')
    next()
}

function m2(req,res,next){
    next()
    console.log('running middleware 2')
}

function m3(req,res,next){
    next()
    console.log('running middleware 3')
}

function m4(req,res,next){
    console.log('running middleware 4')
    next()
}

function m5(req,res,next){
    console.log('running middleware 5')
    next()
}*/


// We can run as many moiddlewares as we want after the root as m2 and m3 middlewares are running in between.
//In case of http for one request we get only one response
app.get('/hello',m1,m2,m3,(req,res)=>{
    console.log('pre res')
    res.send('Hello World')
    console.log('post res')// Fire and forget case
})

//Every middlewhere consumes a memory stack
// m1->m2->m3->res
// exit cases keep running like m3->m2->m1


app.listen(4343,()=>{
    console.log('server started on http://localhost:4343')
})