function helloSayer(times,name){
    let count=0
    let loopid = setInterval(()=>{
        count++
        
        console.log('Hello'+name)
        if(count===times){
            clearInterval(loopid)
        }
        while(true){

        }
    },100)
}

helloSayer(3,'Arnav')
helloSayer(2,'Prateek')

module.exports={
    helloSayer
}
//Parallel Code - Concurrency (Example of two shops)