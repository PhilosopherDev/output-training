/** 
 * 모든 객체는 별도로 정해주지 않으면 Object.prototype 을 상속받는다.
*/

var book = {
    title: "Demian"
};

var prototype = Object.getPrototypeOf(book);
console.log(prototype === Object.prototype); // true

/** 
 * Object.prototype 수정
 * 모든 객체가 기본적으로 Object.prototype 을 상속받으므로 수정시 모든 객체에 반영되어 매우 위험하다. 하지마라.
 */

Object.prototype.add = function(value) {
    return this + value;
}

/** 아래보면 그냥 객체며, 내장 객체(String), global 객체에까지 add 가 다 추가된 걸 볼 수 있다. */
console.log(book.add(5)); // [object Object]5
console.log("title".add("end")); // titleend

console.log(global.add(5)); // [object global]5

/** enumerable 속성도 true 인 method 라 for-in 에서도 나타난다. */
var empty = {};
for (var property in empty) {
    console.log(property); // add
}

for (var property in empty) {
    if (empty.hasOwnProperty(property)) { // for-in 쓸 땐 이렇게 걸러줘야한다.
        console.log(property); // none
    }
}