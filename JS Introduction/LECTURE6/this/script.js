//Answer in context of C++/Java
//What does the keyword "this" mean, what does it refer to ?
//In which place in code can we not use "this" ?

function checkThis(){
    console.log(this)
}

let obj = {
    //"a":10, // same thing
    a:10,
    b:"asadsa",
    c:true,
    d:function(){
        console.log(this)
    },
    10:32246, // correct way to access it in console is obj['10']=32246 //as it is a number so it get stored as string. Also other variables can be accessed like obj['a']=10
    e:{
        l:234,
        m:'sdgsdg',
        n:function(){
            console.log(this)
        },
    },
    // this points to the current object
}

