/**
 * 열거
 * 
 * 객체에 추가하는 프로퍼티는 기본적으로 열거(enumerable)가 가능하다. - 즉 for - in 문을 사용해 흝을 수 있다.
 * 열거 가능 프로퍼티에는 [[Enumerable]] 이라는 내부 속성이 true로 설정되어 있다.
 */

const obj = {
    name: "Jayden",
    age: 30,
    description: "Study hard"
}

for (let property in obj) {
    console.log("key: ", property);
    console.log("value: ", obj[property]);
}

const obj2 = {
    name: "Aiden",
    age: 26,
    description: "English genius"
}

var properties = Object.keys(obj2); // 배열로 사용하고 싶을 때 Object.keys, *Object.keys는 고유 프로퍼티만 반환한다!*

properties.forEach(function(property) { 
    console.log("key: ", property);
    console.log("value: ", obj2[property]);
});

// propertyIsEnumerable()

console.log(Object.prototype.hasOwnProperty("propertyIsEnumerable")); // true

console.log(properties.length); // 3, length 는 분명 properties 배열의 프로퍼티다.
console.log(properties.hasOwnProperty("length")); // true

console.log(properties.propertyIsEnumerable("length")); // false, Enumerable 이 아니라서 Object.keys() 나 for-in 에 나타나지 않는 것이다.

console.log(Array.prototype.hasOwnProperty("length")); // true

console.log(Array.prototype.__proto__ === Object.prototype); // true
