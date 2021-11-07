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

async function task(){
    await Promise.all([
        helloSayer(3,'Arnav'),
        helloSayer(2,'Prateek'),
        helloSayer(3,'Anuj')
    ])
    
    console.log("----End of first part----")

    await Promise.all([
        helloSayer(3,'Abhishek'),
        helloSayer(2,'Anubhuti'),
        helloSayer(3,'Siddharth')
    ])
}

task()

//Running the first three parallely and then running the other three parallely. This can be achieved by using await


module.exports={
    helloSayer
}
