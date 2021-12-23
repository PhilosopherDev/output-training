/**
 * 싱글톤
 * 자바스크립트에는 클래스가 없다.
 * 객체 리터럴로 만든 단순한 객체 또한 싱글톤의 예다. 
 */

var obj = {
    a: 1
};

var obj2 = {
    a: 1
};

console.log(obj == obj2); // false
console.log(obj === obj2); // false

/**
 * 동일한 생성자로 new 를 사용하여 여러개의 객체를 만들 경우, 실제로는 동일한 객체에 대한 새로운 포인터만 반환하도록 구현해보기.
 */

// 스태틱 프로퍼티에 인스턴스 저장하기 - instance가 공개되어 있다는게 유일한 단점이다.
function Universe1() {
    if (typeof Universe1.instance === "object") {
        return Universe1.instance;
    }
    this.start_time = 0;
    this.bang = "Big";

    Universe1.instance = this;

    return this;
}

var uni1_1 = new Universe1();
var uni1_2 = new Universe1();
console.log(uni1_1 === uni1_2); // true
console.log(uni1_1.constructor.name); // Universe1
Universe1.instance = {}; // instance 가 공개되어 있어서 이렇게 직접 접근해서 수정해버릴 수 있다.
var uni1_3 = new Universe1();
console.log(uni1_3); // {}


// 클로저에 인스턴스 저장하기
function Universe2() {
    console.log({this: this}, this.start_time);
    var instance = this;

    this.start_time = 0;
    this.bang = "Big";

    Universe2 = function() { // 여기서 위의 원래 원본 Universe2 와 지금 Universe2 가 달라진다.
        return instance; // 얘는 여전히 바뀌기전 Universe2 의 this 를 가리키고 있다.
    }
}
Universe2.prototype.nothing = function() {
    console.log("nothing");
}
var uni2_1 = new Universe2(); // 이 때 이미 원본 Universe2.prototype 에 접근할 수 있는 방법은 사라진다.
Universe2.prototype.evertything = function() {
    console.log("everything");
}
var uni2_2 = new Universe2();
console.log(uni2_1 === uni2_2); // true
console.log(uni2_1.hasOwnProperty("constructor")); // false
console.log(uni2_1.__proto__.hasOwnProperty("constructor")); // true
console.log(uni2_1.__proto__.constructor.name); // Universe2
console.log(uni2_2.__proto__.constructor.name); // Universe2
console.log(uni2_1.__proto__.constructor === uni2_2.__proto__.constructor); // true
console.log(uni2_1.__proto__.constructor === Universe2); // false, 함수 내부에서 재정의할 때 Universe2 가 달라졌기 때문에 원본 this를 instance로 받은 uni2_1, uni2_2 의 constructor와는 달라진다.
uni2_1.nothing(); // nothing
uni2_2.nothing(); // nothing
console.log(uni2_1.evertything); // undefined
console.log(uni2_2.evertything); // undefined

// 클로저에 인스턴스 저장하기 개선 - 2 
function Universe3() { // Origin Universe3 => "Origin Universe3"
    var instance;
    
    Universe3 = function() { // 재정의한 Universe3 => "New Universe3"
        return instance;
    }
    Universe3.prototype = this; // this => "instance from Origin Universe3"
    
    instance = new Universe3(); // instance => "instance from New Universe3"

    // instance.constructor = Universe3; // 책에는 이렇게 되어 있는데 (instance 에 constructor property를 새로 따준건데) 원래는 instance 에 constructor가 직접있는게 아니라서
    instance.__proto__.constructor = Universe3; // 이렇게 해주는게 맞는거 같다.

    this.start_time = 0;
    this.bang = "Big";

    return instance;
}

var OriginUniverse3 = Universe3;

Universe3.prototype.nothing = function() {
    console.log("nothing333");
}

var uni3_1 = new Universe3();

Universe3.prototype.everything = function() {
    console.log("everything333");
}

var uni3_2 = Universe3();

console.log(uni3_1 === uni3_2); // true
console.log(uni3_1.hasOwnProperty("constructor")); // false
console.log(uni3_1.constructor === Universe3); // true
console.log(uni3_1.__proto__.constructor === Universe3); // true
console.log(uni3_2.__proto__.constructor === Universe3); // true
console.log(uni3_1.__proto__.__proto__.constructor === Universe3); // false, 원본 Universe3 을 가리킨다.
console.log(uni3_1.__proto__.__proto__.constructor === OriginUniverse3); // true, 원본 Universe3 을 가리킨다.
console.log("-------------------------");
console.log(uni3_1.__proto__.hasOwnProperty("nothing")); // false
console.log(uni3_1.__proto__.hasOwnProperty("everything")); // true
console.log(uni3_1.__proto__.__proto__.hasOwnProperty("nothing")); // true
console.log(uni3_1.__proto__.__proto__.hasOwnProperty("everything")); // false
console.log("-------------------------");
uni3_1.nothing(); // nothing333
uni3_2.nothing(); // nothing333
uni3_1.everything(); // everything333
uni3_2.everything(); // everything333