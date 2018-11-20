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

ImmutableList.prototype.filter = function(callback) {
    function filter(arr) {
        if(arr.length === 0) {
            return [];
        } else {
            var head = arr[0];
            var tail = arr.slice(1);
            if(callback(head)) {
                return [head].concat(filter(tail));
            } 
            else {
                return filter(tail);
            }
        }
    }
    
    return ImmutableList.fromArray(filter(this.toArray()));
};

ImmutableList.prototype.map = function(callback) {
    function map(arr) {
        if(arr.length === 0) {
            return [];
        } 
        else {
            var head = arr[0];
            var tail = arr.slice(1);
            return [callback(head)].concat(map(tail));
        }
    }
    
    return ImmutableList.fromArray(map(this.toArray()));
};

ImmutableList.prototype.forEach = function(callback) {
    function forEach(arr) {
        if(arr.length) {
            var head = arr[0];
            var tail = arr.slice(1);
            callback(head);
            forEach(tail);
        }
    }
    
    return forEach(this.toArray());
};

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

lt.filter(function(elem) {
    return elem > 1;
  })
  .forEach(console.log);

console.log();
  
lt.map(function(elem) {
    return elem + 1;
  })
  .forEach(console.log);

