/**
 * 다른 객체에는 없는 함수만의 특성을 꼽으라면 [[Call]] 이라는 내부 속성을 들 수 있다.
 * 어떤 객체든 [[Call]] 속성을 포함하고 있으면 typeof 연산자를 사용했을 때 "function" 을 반환하도록 정의했다.
 * 자바스크립트에서 함수는 객체이기 때문에 다른 언어와는 조금 다르게 작동한다.
 */

function testFn() {
    console.log("test");
}

const testObj = {};

const testRe = new RegExp();

console.log(typeof testFn); // function
console.log(typeof testObj); // object
console.log(typeof testRe); // object