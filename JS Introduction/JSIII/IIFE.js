//IIFE - Immediately Invoked Function Expression
(function (){
    //console.log("hello");
    var a=10;
    var b=a/5;
    console.log(a+b);
})();

//sayHello();// It does not hold any value now as a variable, we can then make it an anonymous function and call it directly after declaration.
//What is the benefit of IIFE ? It can help us create the local scope without creating the global scope.

if(true){// Inside the if block we have created a new scope for doing some work without polluting the global scope
    //var a=10;
    (function(){
        var a=10;
    })()
}
//console.log(a);

//It can help us in minification
function doMath(){
    console.log("3^4 = "+Math.pow(3,4));
    console.log("4^3 = "+Math.pow(4,3));
    console.log("root(2) = "+Math.sqrt(2));
    console.log("sin(10) = "+Math.sin(10));
}

doMath();

(function (l,p,r,s){
    l("3^4 = "+p(3,4));
    l("4^3 = "+p(4,3));
    l("root(2) = "+r(2));
    l("sin(10) = "+s(10));
})(console.log,Math.pow,Math.sqrt,Math.sin);

//IIFE can be used in classic setTimeout problem

for(var i=0;i<10;i++){
    setTimeout(function(){
        console.log(i)
    },100)
}
/**
 * 10
 * 10
 * 10
 * 10
 * .
 * .
 * .
 */

//This issue can be resolved using IFFE

for(var i=0;i<10;i++){
    (function(j){
        setTimeout(function(){
            console.log(j)
        },100)
    })(i)
    
}
// Here we took an external function to create a new closure inside which we will call setTimeout function. Inside this new closure we are rebinding the value of i to j.
// or use let because let creates an internal closure which get bounds to every iteration of the function and every time new i gets inserted in the loop when we use it.

//Or alternatively we can use

for(var i=0;i<10;i++){
    setTimeout(console.log,100,i)
}