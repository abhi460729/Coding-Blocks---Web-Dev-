console.log(1=='1')
console.log(1 === '1')

// peculiar cases
console.log(0=='') // true, because Number('')==0
console.log('false'==false) // false  NaN==0
// Sameness and Equality website can be referred for this approach
console.log(' '==false) // true, both typecasted to 0 using Number(' ')
console.log(' '==0) // true
console.log('\n'==0) // true
console.log(' '=='\t') // false, no type conversion (abstract equality comparison).

// this doesn't hold good for abstract equality
// a=b, b=c /// implies that .. a=c

console.log([1,2]==[1,2]) // false, as both the arrays have same value but the array on the right hand side is a different array (a new array)
//In JS the pass by value and pass by reference are there but in pass by value the value is compared and in pass by reference the pointer i.e. reference is compared
