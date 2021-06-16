/**
 * 프로퍼티 제거
 * delete 연산자 - 객체에서 프로퍼티를 완전히 제거할 때 사용 - 키/값 쌍을 모두 제거
 * 내부적으로 [[Delete]]가 호출된다. 
 */

var person1 = {
    name: "Jayden"
};

console.log("name" in person1); // true
console.log(person1.name); // Jayden

const result = delete person1.name;
console.log({result}); // result: true - 삭제 성공시 true 반환
console.log("name" in person1); // false
console.log(person1.name); // undefined


