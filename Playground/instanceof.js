/** 
 * instanceof 는 뭘 보고 확인하는걸까
 * constructor의 prototype 이 해당 객체의 프로토타입 체인에 존재하는지를 보고 확인한다고 한다.
 */

function Person(name) {
    this.name = name;
}

Person.prototype.person = function() {
    console.log("person!!");
}

function Test() {

}

Test.prototype.test = function() {
    console.log("test!");
}

var person1 = new Person("Philp");
console.log(person1 instanceof Person); // true

console.log(Person.prototype.constructor); // [Function: Person]

Person.prototype.constructor = Test;

console.log(Person.prototype.constructor); // [Function: Test]

var person2 = new Person("Test");
console.log(person2 instanceof Person); // true, Person.prototype.constructor 를 바꿔도 instanceof 는 true 가 잘 나온다.
person2.__proto__ = new Test();
console.log(person2 instanceof Person); // false, 아예 프로토타입 체인에서 Person.prototype 을 빼버리니까 false 가 나온다.
console.log(person2 instanceof Test); // true, Test.prototype 이 프로토타입에 추가됐으니 이제 이게 true 다.
person2.test(); // test!, method 도 잘 실행된다.

// 이 상태로 하나 더 나가서 Test 가 Person 을 상속받게 만들면 person2 의 instanceof 가 다시 true 가 될까?
Test.prototype = new Person("Person");
console.log(Test.prototype.constructor); // Test
Test.prototype.constructor = Person;
console.log(Test.prototype.constructor); // Person
Test.prototype.test = function() {
    console.log("Changed test!");
}

console.log(person2 instanceof Person); // 과연? false 다. 왜지? => 이전 Test.prototype 객체랑 그대로 연결되어있어서 그런거다.
person2.test(); // test! 
person2.__proto__ = new Test();
console.log(person2 instanceof Person); // true, 이제 true 다.
person2.test(); // Changed test! 
person2.person(); // person!!

var person3 = new Test(); // 새로 만들어주면 상속되는걸 볼 수 있다.
console.log(person3 instanceof Test); // true
console.log(person3 instanceof Person); // true, 새로 만드니까 이제 Person 이랑도 prototype chain 으로 연결되서 true 가 나온다. 
person3.test(); // Changed test!
person3.person(); // person!!