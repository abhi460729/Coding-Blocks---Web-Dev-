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

//Sequentially i.e. when we use a async await function
async function task(){
    await helloSayer(3,'Arnav')
    await helloSayer(2,'Prateek')
    await helloSayer(3,'Anuj')
}

helloSayer(18,'Verma')
task()

//If we do not await something it runs parallel to everything else as soon as I await something the execution stops till the promise is resolved and only then the next line of code is executed



//Concurrently i.e. when we use a async function
/*async function task(){
    helloSayer(3,'Arnav')
    helloSayer(2,'Prateek')
    helloSayer(3,'Anuj')
}

task()*/

//Async IIFEs
/*(async()=>{

})()*/


module.exports={
    helloSayer
}
//Parallel Code - Concurrency (Example of two shops)

//A better approach as compared to promises as the code does not look good it has one function call after the other and so on.
//So we are going to use async await instead of promises. In async await what happens is we use a different approach to call the function unlike promises. 