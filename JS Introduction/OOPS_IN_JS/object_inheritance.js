let a ={p:10, q:'akhasd',r:false}
let b=Object.create(a)
let c=Object.create(b)

console.log(a)
console.log(b)
console.log(b.q)
console.log(c.q)
b.q='abaabababab' // It creates a new q inside b
console.log(b)
console.log(c.q)
console.log(a)
// Reading operation has a lookup to parent
// Writing operation happens in the current object 