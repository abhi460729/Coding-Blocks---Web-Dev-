class Person {
    constructor(name,age){
        this.name=name
        this.age=age
    }
} 

class Student extends Person{
    constructor(name,age,school){
        console.log('Creating a student')
        super(name,age)// Super should always be before this 
        this.school=school
    }
}

let p = new Person('Harry Potter', 15)
let s = new Student('Ron Weasley',16,'Hogwards')
console.log(p)
console.log(s)