/**
 * Data Property - [[Put]] 메소드의 기본 동작을 통해 생성 - 이전에 살펴본 대부분이 데이터 프로퍼티
 * 
 * Accessor Property 
 *  프로퍼티를 읽었을 때 호출할 함수 - getter
 *  값을 설정할 때 호출할 함수 - setter
 *  접근자 프로퍼티는 값을 할당할 때, 어떤 동작을 추가로 더 수행하고자 할 때, 또는 값을 읽을 때 추가적인 계산을 통해 반환 값을 만들어야 할 때 유용하다.
 */

// 접근자 프로퍼티의 예시
var person1 = {
    _name: "Jayden",
    // getter 가 없으면 person1.name 에 접근해 get 할 때 아무 동작 없음 
    get name() {
        console.log("name 읽는 중...");
        return this._name;
    },
    // setter 가 없으면 person1.name = something 하고 값을 set 할 때 아무 동작 없음 
    set name(value) {
        console.log("name의 값을 %s로 설정하는 중...", value);
        this._name = value;
    }
};

console.log(person1.name); // name 읽는 중... Jayden, getter 호출

person1.name = "Greg"; // name의 값을 Greg로 설정하는 중..., setter 호출
console.log(person1.name); // name 읽는 중... Greg, getter 호출