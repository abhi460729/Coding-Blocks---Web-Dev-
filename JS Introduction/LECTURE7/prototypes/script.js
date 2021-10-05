let str = "Asdasd"                          // 3 levels from null
let num = 233                               // 3 levels from null
let bool = true                             // 3 levels from null
let arr =[246,436,6,346]                    // 3 levels from null
let obj ={a:10, b:'asdasd'}                 // 2 levels from null
let fun = function() {console.log('yay!')}  // 3 levels from null

// If x and y are not primitive
// x == y : true <- what does this mean?
// this means they are reference to the same object in memory
console.log('********* types ********')
console.log('typeof String', typeof String)
console.log('typeof Boolean', typeof Boolean)
console.log('typeof Number', typeof Number)
console.log('typeof Array', typeof Array)
console.log('typeof Object', typeof Object)
console.log('typeof Function', typeof Function)
console.log(str.__proto__)
/*
Number('135')<- 135
Number('')<- 0
Array() <- Array[]
Array(2,4,6) <-Array(3) [2,4,6]
Array('asd','sf') <- Array('asd','sf')
Array(5) <- Array(5) [<5 empty slots>]
Object() <- Object { }
Object('x','y') <- String { "x" }
Function() <- function anonymous()
Function('s') <- function anonymous()
let f = Function() <- undefined
typeof f <- "function"
*/
// How to create an array of numbers of size 1? In JS on the basis of if else polymorphism happens
// let x = Array(1) <- undefined
//x[0]=8
//Array('asd')<-Array["asd"]
//Array(true)<-Array[true]

console.log('********* proto chain ********')
console.log(str.__proto__.__proto__==obj.__proto__)
console.log(num.__proto__.__proto__==obj.__proto__)
console.log(bool.__proto__.__proto__==obj.__proto__)
console.log(arr.__proto__.__proto__==obj.__proto__)
console.log(fun.__proto__.__proto__==obj.__proto__)

// Everything indirectly inherits from the same thing
// that obj is inherited from
// i.e. in Javascript, everything is essentialy an Object

console.log('********* prototypes ********')
console.log(obj.__proto__ == Object.prototype)// Object inherits from Object.prototype
console.log(str.__proto__ == String.prototype)// String inherits from String.prototype
console.log(num.__proto__ == Number.prototype)// Number inherits from Number.prototype
console.log(bool.__proto__ == Boolean.prototype)// Boolean inherits from Boolean.prototype
console.log(arr.__proto__ == Array.prototype)// Array inherits from Array.prototype
console.log(fun.__proto__ == Function.prototype)// Function inherits from Function.prototype

//typeof Object.prototype - 'Object'


//One more interesting fact
//document.body.__proto__ // HTMLBodyElement
//HTMLBodyElement.prototype // HTMLBodyElement
//HTMLBodyElement.prototype==document.body.__proto__ //true

//String.prototype inherits from Object.prototype
// typeof Object.create(Boolean.prototype) <- "object"
// let x = Object.create(boolean.prototype)
// x.__proto__ == bool.__proto__ //true
//typeof bool<- boolean
//typeof x<- object
//Conclusion is : Two items can have same proto but their typeof will not be the same

//__proto__ -> It is a hidden pointer in every object that points to the model/blueprint from which it was created
//prototype -> Default blueprints that exists in Javascript

console.log(str.charAt(4))
console.log(typeof str.charAt) //function
let str2= "dgndgn"
console.log(str.charAt == str2.charAt)// true

str.charAt = function(){return 'x'} //does not make a difference

String.prototype.charAt = function(){return 'X'}
console.log(str.charAt(1))

// String.prototype contains all default string functions
// like charAt, indexOf, substring, slice, etc
// Number.prototype
// Array.prototype
// Note :- Regarding type casting. When either side contains boolean or Number then only type casting happens or else reference is not compared.

Array.prototype.joinOriginal=Array.prototype.join
Array.prototype.join = function(){
    console.log('join called on', this)
    return this.joinOriginal(arguments)
}

/**
 * 
 * Array.prototype
 * {
 * .....
 * joinOriginal:function(){},
 * join: function(){ our fun},
 * .....
 * }
 */


// window.x=10
//delete window.x
//Classes are not the new new feature at the JavaScript interpreter level but they are only at the syntax level
