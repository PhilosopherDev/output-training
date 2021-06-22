/**
 * 엔진의 호이스팅 과정 들여다보기
 */

// Ex1
a1 = 2;
var a1;
console.log(a1); // 결과는? => 2

// 위의 코드가 실행되는 순서는 아래와 같다. 변수명은 구분하라고 바꾼거다. 
var a2;
a2 = 2;
console.log(a2);

/**
 * 변수와 함수 선언문 모두 코드가 실제 실행되기 전에 먼저 처리된다고 보면 된다. 
 * 
 * 자바스크립트는 var a = 2; 구문을 var a; 와 a = 2; 두 개의 구문으로 본다.
 * var a; 는 선언문으로 컴파일레이션 단계에서 처리한다. 
 * a = 2; 는 대입문으로 실행단계까지 내버려둔다.
 */

foo1();
function foo1() {
    console.log(a); // undefined
    var a = 2;
}

// 위 코드는 아래와 같다. 

function foo2() {
    var a;
    console.log(a);
    a = 2;
}
foo2();

// 함수 선언문은 위처럼 호이스트 되지만 함수 표현식은 다르다. 
// foo3(); // TypeError: foo3 is not a function
var foo3 = function() {
    console.log("foo3");
}

// 위 함수는 아래와 같다. 
var foo4;
// foo4(); // TypeError: foo4 is not a function => 얜 타입 에러 
// baz(); // ReferenceError: baz is not defined => 얜 레퍼런스 에러

foo4 = function() {
    console.log("foo4");
}
