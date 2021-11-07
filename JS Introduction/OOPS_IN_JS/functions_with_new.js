function Person(name,age){
    this.name=name
    this.age=age
    // return 10
}

let p= new Person('Abhishek Verma',24)
console.log('p = ' + JSON.stringify(p))
console.log(p)
// console.log(name)
// console.log(age)