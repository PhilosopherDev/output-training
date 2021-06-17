/**
 * Object.create 로 상속한 경우와 new 로 상속한 경우의 차이를 인스턴스마다 생기는 함수와 prototype 함수에서 확인해보자.
 */

function Person(name) {
    this.name = name;
    this.instanceFn = function() {
        console.log("instance 마다 생기는 함수지롱", this.name);
    }
}

Person.prototype.prototypeFn = function() {
    console.log("prototype 객체애 있는 함수지롱", this.name);
}

var person1 = new Person("instance1");
person1.instanceFn();
person1.prototypeFn();
console.log(person1.hasOwnProperty("instanceFn")); // true
console.log(person1.hasOwnProperty("prototypeFn")); // false

function SubByNew(name) {
    this.name = name;
}
console.log(SubByNew.prototype.constructor); // [Function: SubByNew]
console.log(SubByNew.prototype.__proto__); // [Object: null prototype] {}
console.log(SubByNew.prototype.__proto__.__proto__); // null
SubByNew.prototype = new Person("SubByNew");
console.log(SubByNew.prototype.constructor); // [Function: Person]
console.log(SubByNew.prototype.__proto__); // { prototypeFn: [Function (anonymous)] }
console.log(SubByNew.prototype.__proto__.__proto__); // [Object: null prototype] {}
Object.defineProperty(SubByNew.prototype, "constructor", {
    writable: true,
    enumerable: false,
    configurable: true,
    value: SubByNew
});

var subByNew = new SubByNew("subByNew_instance");
console.log(subByNew.__proto__.constructor); // [Function: SubByNew]

subByNew.instanceFn(); // instance 마다 생기는 함수지롱 subByNew_instance
subByNew.prototypeFn(); // prototype 객체애 있는 함수지롱 subByNew_instance


function SubByObjectCreate(name) {
    this.name = name;
}

console.log(SubByObjectCreate.prototype.constructor); // [Function: SubByObjectCreate]
SubByObjectCreate.prototype = Object.create(Person.prototype, {
    constructor: {
        writable: true,
        enumerable: false,
        configurable: true,
        value: SubByObjectCreate
    }
});
console.log(SubByObjectCreate.prototype.constructor); // [Function: SubByObjectCreate] - 위처럼 만들면서 프로퍼티 적용도 가능
// console.log(SubByObjectCreate.prototype.constructor); // [Function: Person]
// Object.defineProperty(SubByObjectCreate.prototype, "constructor", {
//     writable: true,
//     enumerable: false,
//     configurable: true,
//     value: SubByObjectCreate
// });
// console.log(SubByObjectCreate.prototype.constructor); // [Function: SubByObjectCreate]

var subByObjectCreate = new SubByObjectCreate("subByObjectCreate_instance");

// subByObjectCreate.instanceFn(); // is not a function ** 핵심!! 
subByObjectCreate.prototypeFn(); // prototype 객체애 있는 함수지롱 SubByObjectCreate_Instance