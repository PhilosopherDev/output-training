/** 
 * 상위타입 메소드 접근
 * 가려진 상위타입 메소드에 접근하고 싶으면 - 다른 언어에서는 super.toString()을 통해 가능했지만 자바스크립트는 그렇지 않다.(추후 ES6 class super 확인)
 * 상위타입 프로토타입에 있는 메소드에 바로 접근할 수 있으며 call, apply 를 통해 마치 하위타입의 메소드인양 호출 가능하다.
 */

function Rectangle(length, width) {
    this.length = length;
    this.width = width;
}

Rectangle.prototype.getArea = function() {
    return this.length * this.width;
}

Rectangle.prototype.toString = function() {
    return `[Rectangle ${this.length} x ${this.width}]`;
}

function Square(size) {
    // 생성자 훔치기
    Rectangle.call(this, size,size);
}

// 생성자 상속
Square.prototype = Object.create(Rectangle.prototype, {
    constructor: {
        value: Square,
        configurable: true,
        writable: true,
        enumerable: false
    }
});

// 상위타입 메소드 호출
Square.prototype.toString = function() {
    var text = Rectangle.prototype.toString.call(this); // this 를 넘겨서 Rectangle.prototype.toString 을 하위 메소드처럼 호출한다.
    return text.replace("Rectangle", "Square");

}

var square = new Square(9);

console.log(square.length);
console.log(square.width);
console.log(square.getArea());
console.log(square.toString()); // square 가 this 로 넘어간다.