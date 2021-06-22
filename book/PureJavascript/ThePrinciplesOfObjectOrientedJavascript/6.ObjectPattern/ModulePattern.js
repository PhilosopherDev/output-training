/**
 * 모듈 패턴
 * 즉시 실행 함수 표현식
 * 비공개 데이터에 접근하는 메소드를 가리켜 특권 메소드라 한다.
 * 
 * 객체 메소드를 클로저 함수로 작성해야 한다.
 * 클로저는 쉽게 말해 클로저 함수 스코프 바깥의 변수에 접근할 수 있는 함수를 말한다.
 */

var yourObject = (function IIFE() {
    // 비공개 데이터 변수
    return {
        // 공개 메소드 및 프로퍼티
    }
})();


var person = (function IIFE() {
    var age = 31; // 비공개 데이터 변수

    return {
        name: "Jayden",
        // 아래는 비공개 데이터 age 에 접근하는 특권 메소드 
        getAge: function() {
            return age;
        },
        growOlder: function() {
            age++;
        },
        resetAge: function() {
            age = 31;
        }
    }
})();

console.log(person.name);
console.log(person.getAge());
console.log(person.growOlder());
console.log(person.growOlder());
console.log({person});
person.age = 100;
console.log({person});
console.log(person.growOlder());
console.log(person.getAge());
console.log(person.resetAge());
console.log(person.getAge());

// 아래는 모듈 노출 패턴
var person2 = (function IIFE() {
    var age = 52; // 비공개 데이터 변수

    function getAge() {
        return age;
    }

    function growOlder() {
        age++;
    }

    function resetAge() {
        age = 52;
    }

    return {
        name: "Jordan",
        // 아래는 비공개 데이터 age 에 접근하는 특권 메소드 
        getAge,
        growOlder,
        resetAge
    }
})();

console.log(person2.name);
console.log(person2.getAge());
console.log(person2.growOlder());
console.log({person2});
person2.age = 100;
console.log({person2});
console.log(person2.growOlder());
console.log(person2.getAge());
console.log(person2.resetAge());
console.log(person2.getAge());