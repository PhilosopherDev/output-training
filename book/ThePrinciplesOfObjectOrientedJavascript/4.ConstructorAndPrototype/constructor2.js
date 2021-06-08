/** constructor2 */

function Person(name) {
    /** this 는 new 로 생성된 instance 를 참조 */
    this.name = name;
    this.sayName = function() {
        console.log(this.name);
    }
    /** 생성자 함수에도 return 이 들어갈 경우 해당 return 값이 object 이면 instance 에 반환되는 것을 확인할 수 있다. */
    // return {
    //     name: "hello",
    //     sayName: function() {
    //         console.log("world")
    //     }
    // };
}

/** new 연산자가 반환할 값을 자동으로 만들어내기 때문에 생성자 함수에서는 값을 반환하지 않아도 된다. */
var person1 = new Person("Jayden");
var person2 = new Person("Aiden");

console.log(person1.name);
console.log(person2.name);

person1.sayName();
person2.sayName();
