function downloadPromise(){
    return new Promise(function(resolve,reject){
        console.log("Starting to download the file")
        setTimeout(function(){
            console.log("Download is complete")
            resolve();
        },3000)
    })
}

/*downloadPromise().then(function(){
    console.log("After download")
})*/

let downloadedFile=downloadPromise()

setTimeout(function(){
    downloadedFile.then(function(){
        console.log("After download")
    })
},5000)

/*
Generally when we resolve a promise then then part is executed if then is not there then JS will wait for the then part to be added and then get executed.
When the promise is executed then JS will change the state from PENDING to RESOLVED. Promise once resolved can be used to execute a certain part (then) of the program later. This is known as deffered resolve.
In asynchronous function we have to give the callback then and there.
Sometimes when you start a task you do not want to be interrupted so promises come into play.
*/