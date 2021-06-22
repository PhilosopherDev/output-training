/**
 * 객체 메소드
 * 객체 프로퍼티에 함수가 할당되면 그게 메소드다.
 */

var person = {
    name: "Jayden",
    sayName: function() {
        console.log(person.name); // person.name 직접 참조로 객체와 메소드 간의 강한 결합. 
    }
};

person.sayName(); // Jayden

/**
 * this 객체
 * 강한 결합의 문제점
 * 1. 변수 이름을 바꿀 때 반드시 메소드 안에 있는 참조 코드도 바꿔줘야한다.
 * 2. 같은 함수를 여러 객체에 사용하기 어렵다. 
 * 
 * 자바스크립트의 모든 스코프에는 함수를 호출하는 객체를 뜻하는 this 객체가 있다. 
 * 1. 전역 스코프에서 this는 전역 객체를 참조한다.
 * 2. 객체에 붙어있는 함수를 호출하면 this의 값은 해당 객체의 값이 된다.
 */

function sayNameForAll() { 
    console.log(this.name); // 어디서 호출되느냐에 따라 this가 달라진다.
}

var person1 = {
    name: "Nicholas",
    sayName: sayNameForAll // 여기서 this 는 person1 을 가리킨다.
};

var person2 = {
    name: "Aiden",
    sayName: sayNameForAll // 여기서 this 는 person2 를 가리킨다.
}

name = "Jordan"; // var, let 등을 앞에 달아주면 global 에 할당이 안된다. node 특성인듯?, 브라우저에선 var, let 달아줘도 window 객체에 생긴다.

person1.sayName(); // Nicholas
person2.sayName(); // Aiden
sayNameForAll(); // Jordan, this가 global 을 가리킨다. 
console.log(global.name); // Jordan

/**
 * 일반적으로 this는 자동으로 할당되지만 목적에 따라 바꿀수도 있다.
 * call, apply, bind
 */

function sayNameForAll2(number, label) {
    console.log(number + ". " + label + ": " + this.name2);
}

var person3 = {
    name2: "Michael"
}

var person4 = {
    name2: "Greg"
}

name2 = "Harry";

// call
sayNameForAll2.call(global, 1, "global"); // 1. global: Harry
sayNameForAll2.call(person3, 2, "person3"); // 2. person3: Michael
sayNameForAll2.call(person4, 3, "person4"); // 3. person4: Greg

// apply, 인자 전달 방식만 다르다. apply - array
sayNameForAll2.apply(global, [1, "global"]); // 1. global: Harry
sayNameForAll2.apply(person3, [2, "person3"]); // 2. person3: Michael
sayNameForAll2.apply(person4, [3, "person4"]); // 3. person4: Greg

// bind - 2가지 사용법
function sayNameForAll3(label) {
    console.log(label + ": " + this.name);
}

var person5 = {
    name: "Dread"
}

var person6 = {
    name: "Chovy"
}

var sayNameForPerson5 = sayNameForAll3.bind(person5); // this가 person5에 고정된 함수를 작성
sayNameForPerson5("person5"); // person5: Dread

var sayNameForPerson6 = sayNameForAll3.bind(person6, "person6"); // this가 person6에 고정되고 고정인수도 넣은 함수를 작성
sayNameForPerson6(); // person6: Chovy

// 메소드를 객체에 추가해도 'this'가 바뀌지 않는다. call 이나 apply 실행해도 안바뀐다.
person5.sayName = sayNameForPerson6;
person5.sayName("person5"); // person6: Chovy
sayNameForPerson6.call(person5, "person5");  // person6: Chovy
sayNameForPerson6.apply(person5, ["person5"]);  // person6: Chovy