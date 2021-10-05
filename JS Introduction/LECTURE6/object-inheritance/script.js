let obj1 = {
    a:10,
    b:20,
    c:30
}

let obj= Object.create(obj1) //Object to object inheritance. The new object that is created has a proto field
obj.p='adg'
obj.q='dgn'
obj.r='dfn'

let obj3 = Object.create(obj)

//obj3.__proto__==obj//true
//obj3.__proto__.__proto__==obj1//true
//This logic works for reading (from __proto__) purpose only and not writing.
/*
    obj.a -> it will try to find a in obj2
        -> if not found,
        -> it will try to find it in obj2.__proto__
        -> if not found,
        -> it will try to find it in obj2.__proto__.__proto__
        -> ... and so on ...
        -> till __proto__ becomes null
*/

// obj1={}, obj1.a=10, obj1.b=20, obj1.c=30
// Prototype based inheritance= obj1={} but if we access the objects individually then we get the values it has.
// obj.__proto__ // To be used only when debugging(only from console) and not in production code