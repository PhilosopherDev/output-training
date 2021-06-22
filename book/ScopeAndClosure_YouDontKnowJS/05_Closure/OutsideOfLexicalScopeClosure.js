/**
 * 클로저는 함수가 속한 렉시컬 스코프를 기억하여 함수가 렉시컬 스코프 밖에서 실행될 때에도 이 스코프에 접근할 수 있게 하는 기능을 뜻한다.
 */

// Ex1
function foo1() {
    var a = 2;
    function bar1() { // bar1 은 foo1 스코프에 대한 클로저를 가진다. 
        console.log(a);
    }
    bar1(); // foo1 scope 안에서 bar1 이 실행된거라 딱히 특이할게 없다. bar() 는 foo() 스코프에서 닫힌다.
}

foo1(); // 2

// Ex2
function foo2() {
    var b = 3;
    function bar2() {
        console.log(b);
    }
    return bar2;
}

var baz = foo2();
baz(); // 3 - 클로저! foo2() 를 통해 반환된 bar2를 참조하는 함수 객체를 bar2 가 선언된 렉시컬 스코프 밖에서 실행한 결과로도 선언될 당시의 렉시컬 스코프의 b 의 값인 3이 나왔다.

// Ex3 - 함수를 값으로 넘겨 다른 위치에서 호출하는 행위는 모두 클로저가 적용한 예다.
function foo3() {
    var c = 4;
    function bar3() {
        console.log(c);
    }
    baz2(bar3); // 함수를 값으로 넘겨서 다른 위치에서 호출된다.
}

function baz2(fn) {
    fn(); // 여기서 호출되지만 여전히 c 에 접근 가능 
}

foo3(); // 4 - 그래서 c의 값인 4가 나온다.

// Ex4 
var fn2;

function foo4() {
    var d = 5;
    function bar4() {
        console.log(d);
    }
    fn2 = bar4;
}
function baz3() {
    fn2();
}
foo4(); // 여기서 fn2 에 bar4 할당
baz3(); // 5 - 이렇게 넘겨서 또 넘겨서 호출해도 하여튼 클로저는 함수 선언할 당시를 기준을 생성되어있다.