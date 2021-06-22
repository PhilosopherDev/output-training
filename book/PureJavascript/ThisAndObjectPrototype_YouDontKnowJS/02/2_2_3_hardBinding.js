/**
 * 하드 바인딩
 */

function foo() {
    console.log(this.a);
}

var obj = {
    a: 2
};

var bar = function() {
    foo.call(obj); // 강력하다. 상위 함수 bar가 뭐로 바인딩되어서 호출되어도 어쨌든 foo는 obj의 길을 간다. = Hard binding
};

bar(); // 2

var obj2 = {
    a: 3
};

bar.call(obj2); // 2
// setTimeout(bar, 100); // 2
bar.call(global); // 2

/**
 * 하드 바인딩으로 함수를 감싸는 형태의 코드는 다음과 같이 인자를 넘기고 반환 값을 돌려받는 창구가 필요할 때 주로 쓰인다. 
 */
function foo2(something) {
    console.log(this.a, something);
    return this.a + something;
}

var obj3 = {
    a: 4
};

var baz = function() {
    return foo2.apply(obj3, arguments);
}

var b = baz(3); // 4 3
console.log({b}); // { b: 7 }

/**
 * 재사용 가능한 Helper function
 */

function bind(fn, obj) {
    return function() {
        return fn.apply(obj, arguments); // fn과 obj는 bind 실행할 때 이미 정해져 있다.
    }
}

var qux = bind(foo2, obj3);
var c = qux(5); // 4 5
console.log({c}); // { c: 9 }

var quux = foo2.bind(obj3); // Function.prototype.bind 가 결국 같은 원리
var d = quux(7); // 4 7
console.log({d}); // { d: 11 }