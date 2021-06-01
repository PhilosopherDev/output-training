/** constructor3 */

function Person(name) {
    /** name 인수에 값을 저장하는 접근자 프로퍼티 - 추후 더 확인바람 */
    Object.defineProperty(this, "name", {
        get: function() {
            return name;
        },
        set: function(newName) {
            name = newName;
        },
        enumerable: true,
        configurable: true
    });

    this.sayName = function() {
        console.log(name);
    }
}

// var person1 = new Person("Jayden");
// var person2 = new Person("Aiden");

// console.log(person1.name);
// console.log(person2.name);

// person1.sayName();
// person2.sayName();

/** 
 * 생성자를 호출할 때는 반드시 new 연산자를 사용해야한다. 객체 생성대신 global object가 의도치 않게 수정될 수 있다. 
 * Person을 new 없이 호출하면 생성자 내부의 this는 전역 this 객체와 같다.
 * new가 없으면 Person은 그저 return문이 없는 함수일 뿐이다. 
*/
var person3 = Person("noNew");

console.log(person3 instanceof Person); // false
console.log(typeof person3); // undefined
console.log(name); // noNew