/**
 * foo() 내부에서 생성된 화살표 함수는 foo() 호출 당시(1) this를 무조건 어휘적으로 포착한다.
 * 화살표 함수의 어휘적 바인딩은 절대로 (new로도) 오버라이드 할 수 없다. 
 * 
 * var self = this; 던 화살표 함수던 '어휘적 this' 꼼수는 삼가야한다.
 * 렉시컬 스코프만 사용하던지 bind() 까지 포함한 완전한 this 스타일의 코드를 구사하던지 하나만 하자.
 */

function foo() {
    return () => {
        console.log(this.a);
    };
}

function foo2() {
    return function() {
        console.log(this.a);
    };
}

var obj1 = {
    a: 2
};

var obj2 = {
    a: 3
};

var bar = foo.call(obj1); // foo() 호출 당시(1), foo()는 obj1에 this가 바인딩 되므로 bar의 this 역시 obj1로 바인딩 된다.
bar.call(obj2); // 2, obj1 이 연결된거다.  

var baz = foo2.call(obj1);
baz.call(obj2); // 3

// 화살표 함수는 이벤트 처리기나 타이머 등의 콜백에 가장 널리 쓰인다.
function foo3() {
    setTimeout(() => {
        console.log(this.a);
    }, 100);
}

var obj3 = {
    a: 4
}

foo3.call(obj3); // 4
a = 5;
foo3(); // 5