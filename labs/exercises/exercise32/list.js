function ImmutableList(array) {
    var elems = array instanceof Array ? array : arguments;
    
    if(!(array instanceof Array)) {
        // 借用陣列的 forEach
        elems.forEach = Array.prototype.forEach;
        elems.join = Array.prototype.join;
    }
    
    var lt = this;
    
    // 定義索引
    elems.forEach(function(elem, index) {
        Object.defineProperty(lt, index, {
            value : elem
        });
    });
    
    // 定義長度
    Object.defineProperty(lt, 'length', {
        value : elems.length
    });
    

    Object.preventExtensions(lt);
}

ImmutableList.prototype.toString = function() {
    return '[object ImmutableList]';    
};

ImmutableList.prototype.toArray = function() {
    var lt = this;
    function arrayFrom(i) {
        if(i === lt.length) {
            return [];
        } else {
            return [lt[i]].concat(arrayFrom(i + 1));
        }
    }
    return arrayFrom(0);
}

ImmutableList.fromArray = function(array) {
    return new ImmutableList(array);
};

var lt = ImmutableList.fromArray([1, 2, 3]);

for(var i = 0; i < lt.length; i++) {
    console.log(lt[i]); // 顯示 1 2 3
}

lt[0] = 10;
lt[3] = 50;

for(var i = 0; i < lt.length; i++) {
    console.log(lt[i]); // 顯示 1 2 3
}

console.log(lt.toArray());