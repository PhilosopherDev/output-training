/**
 * thisArg Optional
 *   callback을 실행할 때 this로 사용되는 값.
 */

function foo(el) {
    console.log(el, this.id);
}

var obj = {
    id: "Cool guy"
};

// 두 번째 인자로 들어가는 thisArg 때문에 첫 번째로 넣어준 foo 함수의 this가 obj를 가리킨다.
[1,2,3].forEach(foo, obj); // 1 Cool guy 2 Cool guy 3 Cool guy