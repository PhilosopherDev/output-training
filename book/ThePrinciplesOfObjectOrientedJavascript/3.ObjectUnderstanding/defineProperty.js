/**
 * 프로퍼티를 처음 객체에 추가할 때 = 객체의 [[Put]] 이라는 내부 메소드 호출
 * 기존 프로퍼티에 새 값을 할당할 때 = 객체의 [[Set]] 이라는 내부 메소드 호출
 */

var person1 = {
    name: "Jayden" // [[Put]] name
}

person1.age = 30; // [[Put]] age

person1.name = "Aiden"; // [[Set]] name