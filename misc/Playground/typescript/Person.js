// person.ts
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayHello = function () {
        return "Hello, " + this.name;
    };
    Person.sayBye = function () {
        return "Hello, " + this.name;
    };
    return Person;
}());
var person = new Person('Lee');
console.log(person.sayHello());
