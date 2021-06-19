/** 
 * Object.prototype 이 객체의 마지막에 닿는 prototype 인데, 
 * 그럼 Object 생성자 자체의 prototype 은 뭐지?
 */

var obj = {};

console.log(obj instanceof Object); // true;
console.log(obj.constructor === Object); // true;
console.log(obj.__proto__.constructor === Object); // true;
console.log(obj.__proto__.constructor === obj.constructor); // true;
console.log(obj.hasOwnProperty("constructor")); // false
console.log(obj.__proto__.hasOwnProperty("constructor")); // true

console.log(Object.constructor); // [Function: Function]
console.log(Object.prototype.constructor); // [Function: Object]