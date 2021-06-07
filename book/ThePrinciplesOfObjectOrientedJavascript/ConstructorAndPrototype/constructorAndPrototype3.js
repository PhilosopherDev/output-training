/**
 * prototype을 객체 리터럴로 대체하는 패턴
 * 주의할 점은 prototype의 constructor 프로퍼티가 바뀐다는 것 
 * 생성자와 프로토타입, 인스턴스의 관계에서 가장 흥미로운 부분은 인스턴스와 생성자 사이에 직접적인 연결이 없다는 것이다.
 * */

function Person(name) {
    this.name = name;
}

Person.prototype = {
    constructor: Person, // 이게 있고 없고에 따라 아래 constructor 내용이 바뀌는 걸 확인할 수 있다.
    sayName: function() {
        console.log(this.name);
    },
    toString: function() {
        return "[Person " + this.name + "]";
    }
}

var person1 = new Person("Jayden");

/** 아래를 보면 Person의 instance 인데 constructor 가 Object 인 것을 확인할 수 있다. 
 * 즉 constructor property는 생성자의 prototype에 존재한다. 
*/
console.log(person1 instanceof Person); // true
console.log(person1.constructor === Person); // false , true
console.log(person1.constructor === Object); // true , false

