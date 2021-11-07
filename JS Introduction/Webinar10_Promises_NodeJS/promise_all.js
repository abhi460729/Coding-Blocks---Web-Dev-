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

Promise.all([
    download('http://cb.lk/logo.png'),
    download('http://cb.lk/banner.png'),
    download('http://cb.lk/promo.png')
]).then(function(downloadValues){
    //console.log(values)
    //return values.map(function(item){return resize(item)})
    return Promise.all(downloadValues.map(resize))
}).then(function(resizeValues){
    return Promise.all(resizeValues.map(upload))
})
.then(function(uploadValues){
    console.log(uploadValues)
    })
.catch(function(err){
    console.log(err)
})
//When we use Promise.all if any of them fails thell all will stop not a single one.
//Next is introduction to Node.js which is a JavaScript Intrepreter which runs on the system rather than browser.