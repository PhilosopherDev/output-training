/**
 * constructor & prototype
 * 메소드는 prototype 에 두자.
 */

function Person (name) {
    this.name = name;
}

Person.prototype.sayName = function() {
    console.log(this.name);
}

var person1 = new Person("Jayden");
var person2 = new Person("Aiden");

console.log(person1.name);
console.log(person2.name);

person1.sayName();
person2.sayName();