Object.prototype.custom = function() {
    console.log(this.a);
}

Object.prototype.a = 5;

var myObj = {
    a: 2
};

myObj.custom(); // 2

Object.prototype.custom.call(myObj); // 2
Object.prototype.custom(); // 5
Object.prototype.custom = Object.prototype.custom.bind(myObj);
Object.prototype.custom(); // 2