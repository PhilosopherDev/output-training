/**
 * 생성자 상속
 * 거의 모든 함수에는 prototype 프로퍼티가 있고 이 프로퍼티는 수정, 교체 가능하다.
 * prototype 프로퍼티는 따로 설정하지 않으면 기본적으로 Object.prototype을 상속받는 일반 객체 인스턴스가 되며 
 * 이 인스턴스는 constructor 라는 고유 프로퍼티를 가지고 있다.
 */

// YourConsturctor는 Object의 하위 타입이고 Object는 YourConstructor의 상위 타입

function YourConstructor() {}

// 위 코드를 자바스크립트 엔진이 내부적으로 처리하는 일
/*
    YourConstructor.prototype = Object.create(Object.prototype, {
        constructor: {
            value: YourConstructor,
            configurable: true,
            writable: true,
            enumerable: false
        }
    });
*/

var checkDescriptor1 = Object.getOwnPropertyDescriptor(YourConstructor.prototype, "constructor");
console.log({checkDescriptor1});
/**
{
  value: [Function: YourConstructor],
  writable: true,
  enumerable: false, // enumerable 은 false 다. 책에선 자꾸 true 로 나와서 확인함.
  configurable: true
}
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

//inherits from Rectangle
function Square(size) {
    this.length = size;
    this.width = size;
}

Square.prototype = Object.create(Rectangle.prototype, {
    constructor: {
        value: Square,
        configurable: true,
        writable: true,
        enumerable: false
    }
});

Square.prototype = new Rectangle();
// Square.prototype.constructor = Square; // 이렇게 해주면 enumerable: true 라서 for-in 문에서 constructor 가 노출된다.

Square.prototype.toString = function() {
    return `[Square ${this.length} x ${this.width}]`;
}

var rect = new Rectangle(5, 10);
var square = new Square(7);

console.log(rect.toString()); // [Rectangle 5 x 10]
console.log(square.toString()); // [Square 7 x 7]

console.log(rect.getArea()); // 50
console.log(square.getArea()); // 49

// for (let property in square) {
//     console.log(property);
// }

console.log(Square.prototype.constructor);
console.log(square instanceof Square);
console.log(square instanceof Rectangle);
console.log(square instanceof Object);