/**
 * 함수 선언문이 일반 변수 위로 끌어올려진다.
 */

foo(); // 1
var foo;
foo(); // 1
// 아래 두 개 중 뭐가 앞서는가? 함수!
function foo() {
    console.log(1);
}

foo = function() {
    console.log(2);
}

foo(); // 2

// 위 코드는 아래와 같다.

function foo1() {
    console.log(1);
}
foo1(); // 1 
var foo1;
console.log(foo1);
foo1(); // 1
foo1 = function() {
    console.log(2);
}
foo1(); // 2

// 또 다른 예시
foo2(); // 3
function foo2() {
    console.log(1);
}

var foo2 = function() {
    console.log(2);
}

function foo2() {
    console.log(3);
}