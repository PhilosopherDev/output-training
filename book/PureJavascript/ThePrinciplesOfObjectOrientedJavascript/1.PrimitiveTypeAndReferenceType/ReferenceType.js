/**
 * 참조 타입
 * 생성 방법 
 * 1. new 연산자와 constructor (생성자)
 * 2. literal (리터럴)
 */

/** 참조 제거 */ 
var object1 = new Object();
object1 = null; // 이래야 위에 만든 객체가 가비지 컬렉터에 의해 메모리 해제 가능

/** 객체 생성 이후에도 프로퍼티 자유롭게 추가 제거 가능 */ 
var object2 = new Object();
var object3 = object2;

object2.test = "test!";
console.log(object3.test); // test!;

/** 내장 타입 인스턴스화  */ 
var items = new Array(10);
var now = new Date();
var error = new Error("Error!!");
var func = new Function("console.log('Hello world');");
var object = new Object();
var re = new RegExp("\\d+");

// console.log({items, now, error, func, object, re});
// console.log(items.__proto__, now.__proto__, error.__proto__, func.__proto__, object.__proto__, re.__proto__);
console.log(typeof items, typeof now, typeof error, typeof func, typeof object, typeof re); // func 만 function 으로 나오고 나머지는 object
// typeof 로 object는 서로 구분이 안되서 사용하는게 instanceof, instanceof 가 뭘보고 확인하는건지 궁금하긴하네.
console.log( items instanceof Array, now instanceof Date, error instanceof Error, func instanceof Function, object instanceof Object, re instanceof RegExp); // 전부 true
console.log( items instanceof Object, now instanceof Object, error instanceof Object, func instanceof Object, object instanceof Object, re instanceof Object); // 이것도 전부 true 라서 주의. 모든 객체는 Object 의 instnace 이기도하다.
// 배열 확인은 Array.isArray() 로 해라. 