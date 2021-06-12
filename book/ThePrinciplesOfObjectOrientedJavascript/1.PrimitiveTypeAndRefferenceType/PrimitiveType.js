/** 원시 타입의 경우 값으로 복사 됨 */
var color1 = "red";
var color2 = color1;

console.log(color1); // red
console.log(color2); // red

color1 = "blue";

console.log(color1); // blue, color1 만 바뀐다. color1 과 2 가 참조로 연결되지 않았다는 뜻. 
console.log(color2); // red

/** typeof */
console.log(typeof "stringValue"); // string
console.log(typeof 1); // number
console.log(typeof 1.2); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined

/** 
 * null 이 예외 
 * 그렇다고 null.prototype 으로 접근 가능한 것도 아니고. 딱히 object 취급 할 수 있는 내용은 모르겠다.
 * null 비교 할 땐 무조건 === 사용 
 */
console.log(typeof null); // object, 이래서 null 을 빈 object 라고 하는 경우가 있다. TC39 에서 실수라고 인정했다고 한다. 
console.log(null); // null