var intervalId;
var runCount = 0;
function sayHello(){
    runCount++;
    if(runCount>5){
        clearInterval(intervalId)
    }
    console.log("Hello !")
}
/*function sayHello(){
    console.log("Hello !")
}
console.log("And the wait starts.....")*/
//setTimeout(sayHello,1000)
//setTimeout(sayHello,1000)
//It prints 1 sayHello after 1 second twice
//setInterval(sayHello, 1000)
//It prints sayHello after every 1 second
//let intervalId=setInterval(sayHello,1000);
//clearInterval(intervalId)
//var intervalID = setInterval(sayHello, 1000);

function myFun(){
    console.log("My Function")
}
setInterval(myFun, 1000)