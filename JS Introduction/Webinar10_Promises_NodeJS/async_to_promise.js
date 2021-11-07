function someAsyncTask(callback){
    console.log("Begenning of task")
    setTimeout(function(){
        console.log("End of task")
        callback();
    },3000)
}

/*someAsyncTask(function(){
    console.log("We did some task")
})*/

//The below code converts an async function to promise. It is called promisification.
let someTaskPromise= function(){
        return new Promise(function(resolve,reject){
        someAsyncTask(resolve)
    })
}

someTaskPromise()
    .then(function(){
        console.log('after task is complete')
    })

/*
What is async function?
asyncFunc(func(){})
func(){}-> This is called when the task is done

And the definition of async function is:
asyncFunc=function(done){
   //Do some task.
   //When every thing is done then
   //At the end we call done() 
}


//How Promises work is?
runPromise()
<Promise>->.then()
            .catch()

*/

/*
Difference between async function and promises.
async function
asyncDownload(func(){
    //Downloading done
})

promises
promiseDownload()
    .then(func(){
    //Downloading done
})
*/