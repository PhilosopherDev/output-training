/**
 * prototype 사용시 주의할 점. 
 * 동일한 생성자로 생성된 모든 인스턴스에서 접근 가능하므로 주의해야한다.
 */

function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function() {
    console.log(this.name);
}

Person.prototype.favorites = []; // 주의 해야하는 배열

var person1 = new Person("Jayden");
var person2 = new Person("Aiden");

/** 서로 다른 인스턴스에서 동일한 prototype.favorites 배열에 접근 가능하므로, favorites 배열에 아래와 같이 의도와 다른 동작을 할 수 있다. */
person1.favorites.push("pizza");
person2.favorites.push("hamberger");

console.log(person1.favorites); // ['pizza', 'hamberger']
console.log(person2.favorites); // ['pizza', 'hamberger']