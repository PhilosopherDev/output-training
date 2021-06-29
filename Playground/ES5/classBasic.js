class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayName() {
        console.log(this.name);
    }
}

class Programmer extends Person {
    constructor(name) {
        super();
    }

    sayCode() {
        console.log("Hello world! ", this.name);
    }
}

var programmer = new Programmer("Byungmin", 31);
console.log({programmer});
console.log(programmer.name);
console.log(programmer.hasOwnProperty("name"), programmer.hasOwnProperty("age"));
console.log(programmer.__proto__.constructor);
console.log(programmer.__proto__.__proto__.constructor);
console.log(programmer.__proto__.__proto__.__proto__.constructor);
programmer.sayName();
programmer.sayCode();

Person.prototype.sayName = function() {
    console.log("changed!!", this.name);
}

programmer.sayName();
programmer.sayCode();