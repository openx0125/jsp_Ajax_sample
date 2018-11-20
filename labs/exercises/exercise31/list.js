function ImmutableList() {
    // 借用陣列的 forEach
    arguments.forEach = Array.prototype.forEach;
    
    var lt = this;
    
    // 定義索引
    arguments.forEach(function(elem, index) {
        Object.defineProperty(lt, index, {
            value : elem
        });
    });
    
    // 定義長度
    Object.defineProperty(lt, 'length', {
        value : arguments.length
    });
    

    Object.preventExtensions(lt);
}

ImmutableList.prototype.toString = function() {
    return '[object ImmutableList]';    
};

var lt = new ImmutableList(1, 2, 3);

for(var i = 0; i < lt.length; i++) {
    console.log(lt[i]); // 顯示 1 2 3
}

lt[0] = 10;
lt[3] = 50;

for(var i = 0; i < lt.length; i++) {
    console.log(lt[i]);  // 顯示 1 2 3
}
