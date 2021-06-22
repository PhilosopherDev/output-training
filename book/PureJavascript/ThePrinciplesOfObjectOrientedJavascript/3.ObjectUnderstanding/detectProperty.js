/**
 * 프로퍼티 탐지
 * 
 * truthy value, falsy value 고려해서 탐지해야한다.
 * in - 특정 객체의 프로퍼티인지 확인
 * hasOwnProperty - 특정 객체의 '고유' 프로퍼티인지 확인
 */


var person1 = {
    name: "Harry",
    sayName: function() {
        console.log(this.name);
    }
};

console.log("name" in person1); // true
console.log(person1.hasOwnProperty("name")); // true

console.log("toString" in person1); // true
console.log(person1.hasOwnProperty("toString")); // false

console.log("toString" in Object); // true
console.log(Object.prototype.hasOwnProperty("toString")); // true
console.log(Object.hasOwnProperty("toString")); // false

// console.log(person1.__proto__ === Object.prototype);
// console.log(person1.__proto__.toString === Object.prototype.toString);