function Person(name,age){
    this.name=name
    this.age=age
}

function Student(){

}

let p1 = new Person('John Doe')

//Before 2015 i.e. ECMA Script5
/**
 * Functions starting with capital letter were considered as classes and those not were called as functions.
 * p1.__proto__ == Person.prototype // true i.e. It is proved that the same thing is achieved as was achieved by class.
 * In case of class implementation we can say that new keyword is necessary to call Person() class but not in case of functions. Although typeof gives function.
 * 
 * Student.prototype=Object.create(Person.prototype)
 * Student.prototype.__proto__==Object.prototype //false
 */