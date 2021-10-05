var a=10;
function print(){
    console.log(a);
}

print();

function count(){
    var initial =1;
    function plus(){
        console.log(++initial);
    }
    return plus;
}

var c=count();
c();
c();


function counter(val){
    function plus(){
        console.log(++val);
    }
    return plus;
}

var c = counter(10);
c();
c();


function createCounter(initVal,deltaVal){
    return {
        up() {
            initVal += deltaVal;
            console.log(initVal)
        },
        down() {
            initVal -= deltaVal;
            console.log(initVal)
        }
    }
}



var c =createCounter(10,2);
c.up();
c.up();
c.down();
