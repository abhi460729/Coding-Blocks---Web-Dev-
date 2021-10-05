/**
 * 
 * ES6 Promises
 */
// Latest Firefox/Chrome/Safari/Edge, Node.js 7.0 || Bluebird

/*function fakeDownload(done){
    setTimeout(function(){
        let downloadedData="Some data we ripped of the interwebs"
        done(downloadedData);
    },1000)
}

fakeDownload(function (data){
    console.log("We downloaded a file which had this data->")
    console.log(data)
})*/

//Introduction to Promises
function fakeDownloadPromise(correct){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            let downloadedData="Some data from net"
            if(correct){
                resolve(downloadedData)
            }else{
                reject(new Error("Could not download file"))
            }
            resolve(downloadedData)
        },1000)
    })
}

let downloaded=fakeDownloadPromise(false)

/*fakeDownloadPromise(false).then(function(data){
    console.log("The data we downloaded is ->")
    console.log(data)
}).catch(function(err){
    console.log(err)
})*/

downloaded.catch(function (err){
    console.log(err)
})

setTimeout(function(){
    downloaded.then(function(data){
        console.info("The data was downloaded in this ->")
        console.info(data)
    })
},3000)