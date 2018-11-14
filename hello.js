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
arrayLike.forEach( console.log);
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