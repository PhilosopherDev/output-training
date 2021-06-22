/** 
 * 특정 타입의 인스턴스는 모두 같은 prototype을 공유하기 때문에 언제든 한꺼번에 기능을 추가할 수 있다.
 */

function Person(name) {
    this.name = name;
}

Person.prototype = {
    constructor: Person,
    sayName: function() {
        console.log(this.name);
    },
    toString: function() {
        return "[Person " + this.name + "]";
    }
};

var person1 = new Person("Jayden");
var person2 = new Person("Aiden");

console.log("sayName" in person1); // true
console.log("sayName" in person2); // true

console.log("sayHi" in person1); // false
console.log("sayHi" in person2); // false

/** 위에서 instance 생성 이후에 새로운 메소드 추가 
 * 아래와 같이 일괄적으로 모든 instance 에서 접근 가능하도록 새로운 메소드 추가가 가능
*/

/** 중간에 객체를 동결해도, 해당 객체가 동결된 것이지 객체의 prototype이 동결된 것이 아니므로 추가가 가능하다. */
Object.freeze(person1);

Person.prototype.sayHi = function() {
    console.log("hi");
};

person1.sayBye = function() {
    console.log("bye");
}
console.log(person1.sayBye); // undefined

person1.sayHi(); // hi
person2.sayHi(); // hi

console.log("sayHi" in person1); // true
console.log("sayHi" in person2); // true