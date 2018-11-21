console.log('Hello, World');
console.log(`Hello, World`);
function isRealNaN(value){
    return value !== value;
}
console.log(isRealNaN('ccc'));
console.log(isRealNaN(NaN));
var y=undefined, x=null;
console.log(y + '***********'+x);
//console.log(z);
console.log('XD');

function func() {
    xx = 10;
    var y = 20;
}
function hasAttr(obj, attName){
 return typeof(obj[attName]) != 'undefined';
}
function doCount(obj){
    if(hasAttr(obj), 'count'){
        obj.count++;
    }else{
        obj.count=0;
    }
}

var obj = {};
doCount(obj);
console.log('objk'+obj.count);
func();

console.log('xx::'+xx);
console.log('y::' +y);
console.log('**********************************88888');
var o ={
    x:10,
    y:20
};
for(var propName in o){
    console.log(propName + ': ' + o[propName]);
}
console.log('**********************************888881');
function ajax(option){
    var method = option.method;
    var url = option.url;
    console.log('ss::' + method + 'xx' + url);
}

ajax({
    url : 'http://openhome.cc'
});


///////////////////////////////////////////////////////
function print(array) {
    for(var i=0;i<array.length;i++){
        console.log(array[i]);
    }
}
console.log('===========================================================');
var array = [1, 2, 3];
print(array);  // 1 2 3
console.log('........');

array.length = 5;
print(array);  
console.log('........');

array.length = 2;
print(array); 
console.log('........');

array.length = 3;
print(array);  
console.log('===========================================================');

var max = function(num1, num2){
    return num1>num2 ? num1: num2;
};

console.log(max(5,100));
console.log(max(101,100));


function sum(){
    var sum=0;
    for(var i=0;i< arguments.length;i++){
        sum+=arguments[i];
    }
    return sum;
}

console.log('sum::' + sum(5,6,7,8,9,10));

var numbers = [5,1,7,3,2];
numbers.sort(function(num1, num2){
    return num1-num2;
}).forEach(function(elem){
    console.log(elem);
});

console.log('===========================================================');
let numbersA = [5,1,7,3,2];
numbersA.sort((n1, n2)=>n1-n2).forEach(elem=>console.log(elem));

console.log('===========================================================');
(function(){
    console.log('anonymous function!!');
})();
console.log('===========================================================');
function toString(){
    return '[' + this.name + ', ' + this.age + ']';
}
var p1 = {
    name: 'Justin',
    age: '35',
    toString: toString    
}
var p2 = {
    name: 'Momor',
    age: '32',
    toString: toString    
}
console.log(toString.call(p1));
console.log(toString.call(p2));
console.log('===========================================================');
var arrayLike = {
    '0': 10,
    '1': 20,
    '2': 30,
    length:3,
    forEach: function(handler){
        for(var i=0;i<this.length;i++){
            handler(this[i]);
        }
    }
};
/*
arrayLike.forEach( function(elem){
    console.log(elem);
});
*/

function sum1(){
    return console.log(this.length);
}

console.log('--->');
arrayLike.forEach(  console.log);
arrayLike.forEach(  sum1);
console.log('*********====================================================');

arrayLike.forEach(elem=>console.log(elem));
console.log('===========================================================');
var obj = {
    '0': 10,
    '1': 20,
    '2': 30,
    length:3
};
for(var i=0;i<obj.length;i++){
    console.log(obj[i]);
}
console.log('===========================================================');
//20181115 Closure page.84
function foo(){
    return{
        x:10
    };
}
var wat = foo();
console.log('wat: '+wat.x);


function foo1(x){
    function getX(){
        return x;
    }
    function setX(value){
        x=value;
    }
    return {
        getX : getX,
        setX : setX
    };
}
var wat1 = foo1(1);
console.log('wat: '+wat1.getX());
wat1.x = 20;
console.log('wat: '+wat1.getX());
console.log('===========================================================');
wat1.setX(20);
console.log('wat: '+wat1.getX());
console.log('===========================================================');
function toString(){
    return '[' + this.name + ', ' + this.age + ']';
}


console.log('===========================================================');
var funcs = [];

//Closure 
for(var i =0;i<5;i++){
    var f = function(){
        return i;
    }
    funcs.push(f);
}

//顯示i值
for(var j=0;j<funcs.length;j++){
    var f = funcs[j];
    console.log(f());
}
console.log('===========================================================');
var pp = encodeURIComponent("http://www.google.com/index.htm?abc= ww34 &bb=中文");
console.log(pp);
console.log('===========================================================');
//var array = [1,2,3];
function ImmutableList(){
    arguments.forEach = Array.prototype.forEach;
    arguments.join = Array.prototype.join;
    var lt = this;

    arguments.forEach(function (elem, index) {
        Object.defineProperty(lt, index,{
            value: elem
        });
    });

    Object.defineProperty(lt, 'length',{   
        value : arguments.length
    });
    Object.preventExtensions(lt);



    // for(var i=0;i<arguments.length;i++){
    //     this[i] = arguments[i];
    // }
    // this.length = arguments.length;
}
ImmutableList.prototype.toString=function(){
    return '[object ImmutableList]';
};
var array = new ImmutableList(1,2,3);
var array_b = new ImmutableList(1,2,3,4,5);
// array.forEach();
console.log('array_b.length: ' + array_b.length);
for(var i=0;i<array_b.length;i++){
    console.log(array_b[i]);
}
array_b[1]=20;
array_b[2]=30;

for(var i=0;i< array_b.length;i++){
    console.log(array_b[i]);
}
