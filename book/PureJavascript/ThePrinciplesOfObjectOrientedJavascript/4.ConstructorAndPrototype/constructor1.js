/** constructor 1 */

function Person() {

}

// var person1 = new Person();
// var person2 = new Person();

/** 위 아래는 동일하다. 인자가 없으면 () 괄호 생략 가능 */

var person1 = new Person;
var person2 = new Person;

// console.log(person1, person2);

/** instanceof 로 해당 객체 타입(생성자) 확인 가능 */
console.log("person1 instanceof Person:", person1 instanceof Person); // true
console.log("person2 instanceof Person:", person2 instanceof Person); // true

/** constructor 로도 어떤 생성자로부터 만들어졌는지 확인 가능하나, constructor 를 덮어쓸 수 있으므로 위의 instanceof 로 확인하는 것이 좋다. */
console.log(person1.constructor, person2.constructor); 
console.log(person1.constructor === Person, person2.constructor === Person); // true true

