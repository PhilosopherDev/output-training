/**
 * Lexical Scope 
 * => 정적 스코프. 함수가 선언될 떄 scope 가 결정된다. 
 * 그래서 foo() 안에서 bar() 를 실행해도, bar 가 foo 바깥 scope 이기 때문에 
 * foo 안의 a 인 200 이 아니라, 선언할 때 결정된 scope 의 a 인 10 이 설정된다. 
*/

var a = 10;

function foo() {
    var a = 200;
    bar();
}

function bar() {
    console.log(a);
}

foo(); // 10
bar(); // 10