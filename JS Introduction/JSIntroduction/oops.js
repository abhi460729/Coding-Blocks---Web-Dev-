// Object Oriented Programming in Javascript


//allows to create objects without defining the class
// One of the way of creating objects i.e. JSON (Java Script Object Notation) Objects
function Fruit(taste,color){
    this.color=color;
    this.taste=taste;
}

// new keyword, Second Way to Create Objects
let mango= new Fruit("sweet","yellow");
let orange= new Fruit("sour","orange");

//One Way
var apple = {
    taste:"sweet",
    color:"red",
}

// Class Keyword (ECMAScript 2015)
// Class Declaration 
class FruitClass{
    constructor(taste,color){
        this.color=color;
        this.taste=taste;
    }
};

//Function - Declaration, Function Expression

let kiwi= new FruitClass("sour","green");

//Class Expression
let FruitClass2=class{
    constructor(taste,color){
        this.color=color;
        this.taste=taste;
    }
}

let kiwi2= new FruitClass2("sour","greem");

/*var bird={
    x:100,
    y:20,
    color:"blue",
    eggs:[1,2,3,4],
    fly:function(){
        console.log("Bird is flying",this.x,this.y)
    }

};

//For Loop
for(let i=0;i<bird.eggs.length;i++){
    console.log(bird.eggs[i]);
}

//For Each Loop
bird.eggs.forEach(function(val,idx){
    console.log(idx,val);
});

*/
