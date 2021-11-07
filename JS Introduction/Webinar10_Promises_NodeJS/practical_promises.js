function download(url){
    return new Promise(function(resolve,reject){
        if(!url.startsWith("http")){
            reject(new Error("Url does not start with http"))
        }else{
            console.log("Start download : " + url)
            setTimeout(function(){//fake 3 second download task
                let fileName=url.split("/").pop()
                resolve(fileName)
            },3000)
        }
    })
}

function resize(fileName){
    return new Promise(function (resolve,reject){
        if(!fileName.endsWith(".png")){
            reject(new Error("file is not png"))
        }else{
            console.log("Start resize : " + fileName)
            setTimeout(function(){// fake 3-sec resize task
                //change x.png ->x-resized.png
                let resizedFile = fileName.split(".")[0]+"-resized.png"
                resolve(resizedFile)
            },3000)
        }
    })
}

function upload(resizedfileName){
    return new Promise(function(resolve,reject){
        console.log("Start upload : " + resizedfileName)
        setTimeout(function(){ //fake 3-sec upload task
            let uploadedUrl="http://imgur.com/" + resizedfileName
            resolve(uploadedUrl)
        },3000)
    })
}

/*download('http://cb.lk/logo.png')
    .then(function (fileName){
        resize(fileName).then(function(resizedFile){
            console.log("Resized file is at:"+resizedFile)
        })
    })*/

/*download('http://cb.lk/logo.png')
    .then(resize)
    .then(function(resizedFile){
        console.log("Resized file is at:"+resizedFile)
        })
    .catch(function (err){
        console.error(err)
    })*/

    /*
    In promise chain if we place a single catch at the end of the file then it can catch the error thrown by any of the promises present in the chain.
    */

    download('http://cb.lk/logo.png')
    .then(resize)
    .then(upload)
    .then(function(uploadedUrl){
        console.log("File was uploaded to :"+uploadedUrl)
        })
    .catch(function (err){
        console.error(err)
    })