/**
 * 프로퍼티 서술자
 */

var myObject = {
    a: 2
};

const a = Object.getOwnPropertyDescriptor(myObject, "a");
console.log(a); // { value: 2, writable: true, enumerable: true, configurable: true }

// writable - 쓰기 가능 여부
// configurable - 설정 불가, 쓰기 지우기 
// enumerable - 열거 가능성