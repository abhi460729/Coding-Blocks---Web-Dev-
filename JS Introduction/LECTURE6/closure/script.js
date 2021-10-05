//Lecture JS - [LVWD-06] JavaScript Higher Order Functions, Closures and Prototypes.

//Closures Example
function outer(arg1){
    let var1 = 10
    let x = 10
    function inner(arg2){
        let var2 = 20
        let x = 20
        console.log(arg1,var1,arg2,var2,x)
        console.log(arguments[0]) // By using the arguments array we can access the arguments of the current function.
    }
    return inner;
    // return 10
}

var t=10

let x = outer('param1');
// typeof x = 'function'
//x = inner

// scope of arg1 and var1 are from lines 2 to 10
x('param2');

