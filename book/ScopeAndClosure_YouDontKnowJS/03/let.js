/**
 * 키워드 let은 선언된 변수를 둘러싼 아무 블록의 스코프에 붙인다.
 */

var foo = true;
if (foo) {
    let bar = foo * 2;
    console.log(bar); // 2 
}
// console.log(bar); // ReferenceError: bar is not defined

var foo = true;
if (foo) {
    // console.log(bar); // ReferenceError: Cannot access 'bar' before initialization
    let bar = 2; // => let 은 호이스팅 되지 않는다. let 으로 선언된 변수는 실제 선언문 전에는 명백하게 '존재'하지 않는다.
}

var foo = true;
if (foo) {
    console.log(bar); // undefined
    var bar = 2; // => var 는 호이스팅 된다.
}