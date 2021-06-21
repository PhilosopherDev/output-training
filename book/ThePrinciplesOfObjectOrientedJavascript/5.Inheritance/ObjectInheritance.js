/**
 * 객체 상속
 * 새 객체의 [[Prototype]]으로 사용할 객체만 설정해주면 상속이 이루어진다.
 * Object.create() 로 [[Prototype]]을 명시적으로 정해줄 수 있다. 
 */

var book1 = {
    title: "객체지향 자바스크립트의 원리"
};

// 위 코드는 아래와 같다.

var book2 = Object.create(Object.prototype, {
    title: {
        value: "객체지향 자바스크립트의 원리",
        writable: true,
        configurable: true,
        enumerable: true
    }
});

console.log({book1, book2});

// Object.prototype 이 아닌 다른 객체를 상속할 때 훨씬 유용하다.
var person1 = {
    name: "Jayden",
    sayName: function() {
        console.log(this.name);
    }
};

var person2 = Object.create(person1, {
    name: {
        value: "Cuzz",
        configurable: true,
        writable: true,
        enumerable: true
    }
});

person1.sayName(); // Jayden
person2.sayName(); // Cuzz

console.log(person1.hasOwnProperty("sayName")); // true
console.log(person2.hasOwnProperty("sayName")); // false

console.log(Object.prototype.isPrototypeOf(person1)); // true
console.log(person1.isPrototypeOf(person2)); // true
console.log(Object.prototype.isPrototypeOf(person2)); // true

// Prototype 이 null 인 객체
var nakedObject = Object.create(null);

console.log("toString" in nakedObject); // false
console.log("valueOf" in nakedObject); // false

