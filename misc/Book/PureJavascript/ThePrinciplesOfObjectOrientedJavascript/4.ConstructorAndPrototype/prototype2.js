/** 
 * [[Prototype]] 프로퍼티 
 * new 연산자를 사용해 새 객체를 생성할 때 생성자의 prototype 프로퍼티가 새로 생성된 객체의 [[Prototype]] 프로퍼티에 할당된다. 
 */

var object = {};
var prototype = Object.getPrototypeOf(object); // [[Prototype]] 프로퍼티 값은 Object.getPrototypeOf 메소드로 확인 가능

console.log(prototype === Object.prototype); // true

function Person(name) {
    this.name = name;
}

/** 아래 메소드 sayName을 인스턴스마다 접근해서 사용하는 것이다. 실제로 인스턴스마다 갖고 있지 않다.*/
Person.prototype.sayName = function() {
    console.log(this.name);
}

var person1 = new Person("Jayden");
var person2 = new Person("Aiden");

console.log(person1.name, person2.name);
person1.sayName(); // Jayden
person2.sayName(); // Aiden
// 위에서 분명 사용하는데, 아래 hasOwnProperty로 확인하면 실제로 갖고 있진 않다. 
console.log(person1.hasOwnProperty("sayName")); // false
console.log(person1.hasOwnProperty("sayName")); // false 
// prototype 을 공유하는 것을 확인할 수 있다.
console.log(Object.getPrototypeOf(person1), Object.getPrototypeOf(person1) === Person.prototype); // true
console.log(Object.getPrototypeOf(person2), Object.getPrototypeOf(person2) === Person.prototype); // true


var object2 = {};

console.log(object2.toString()); // [object Object], Object 에 있는 toString() 메소드 사용

object2.toString = function() {
    return "[object Custom]";
}

console.log(object2.toString()); // [object Custom], 고유 프로퍼티가 생겼으므로 prototype 이 아니라 본인 메소드에 접근

delete object2.toString; // delete 는 고유 프로퍼티만 삭제한다. prototype 타고가서 삭제하지 않는다.

console.log(object2.toString()); // [object Object],고유 프로퍼티 삭제했으므로 다시 prototype 에 toString 에 접근

delete object2.toString; // delete 는 고유 프로퍼티만 삭제한다2. 아무 변화 없음

console.log(object2.toString()); // [object Object], 그대로 prototype 에 toString 에 접근