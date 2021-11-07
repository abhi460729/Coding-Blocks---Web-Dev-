function helloSayer(times,name){
    return new Promise((resolve,reject)=>{
        let count=0
        let loopid = setInterval(()=>{
            count++
            
            console.log('Hello'+name)
            if(count===times){
                clearInterval(loopid)
                resolve()
            }
        },100)
    })
}
/*console.log(helloSayer(3,'Arnav'))
helloSayer(3,'Arnav')
.then(()=>{
    helloSayer(2,'Prateek')
    .then(()=>{
        helloSayer(2,'Garima')
        .then(()=>{
            
        })
    })
})*/

//Sequentially i.e. when we use a promise
/*helloSayer(3,'Arnav')
    .then(()=>helloSayer(2,'Prateek'))
    .then(()=>helloSayer(2,'Rishab'))
    .then(()=>helloSayer(2,'Harshit'))
    .then(()=>helloSayer(2,'Asyush'))*/

//Concurrently
helloSayer(3,'Arnav')
    .then(helloSayer(2,'Prateek'))
    .then(helloSayer(2,'Rishab'))
    .then(helloSayer(2,'Harshit'))
    .then(helloSayer(2,'Asyush'))


module.exports={
    helloSayer
}
//Parallel Code - Concurrency (Example of two shops)

//A better approach as compared to Callbacks