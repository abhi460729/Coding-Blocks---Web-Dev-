function helloSayer(times,name,doneSaying){
    let count=0
    let loopid = setInterval(()=>{
        count++
        
        console.log('Hello'+name)
        if(count===times){
            clearInterval(loopid)
            doneSaying()
        }
    },100)
}

helloSayer(3,'Arnav',()=>{
    helloSayer(2,'Prateek',()=>{
        helloSayer(3,'Garima',()=>{
            helloSayer(2,'Rishab',()=>{
        
            })
        })
    })
})
