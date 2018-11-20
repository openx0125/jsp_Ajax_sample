function print(array) {
    for(var i = 0; i < array.length; i++) {
         console.log(array[i]);
    }
}

// 在這邊寫些測試

var array = [1, 2, 3];
print(array);  // 1 2 3
console.log('........');

array.length = 5;
print(array);  // 1 2 3 undefined undefined
console.log('........');

array.length = 2;
print(array);  // 1 2
console.log('........');

array.length = 3;
print(array);  // 1 2 undefined