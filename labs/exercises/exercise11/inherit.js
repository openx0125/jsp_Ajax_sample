function Circle(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
}

Circle.PI = 3.14159; 

Circle.prototype.area = function() {
    return this.r * this.r * Circle.PI;
};

function Cylinder(x, y, r, h) {
    Circle.call(this, x, y, r); // 呼叫父建構式
    this.h = h;
}

