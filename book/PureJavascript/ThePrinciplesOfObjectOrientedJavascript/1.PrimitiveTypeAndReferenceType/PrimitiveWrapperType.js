/**
 * 원시 래퍼 타입
 * String
 * Number
 * Boolean
 */

// 보통 작성하는 코드, String 은 원래 원시 타입인데 charAt을 사용한다. 
var name = "Philp";
var firstChar = name.charAt(0);
console.log(firstChar); // P

// 위 코드는 사실 아래와 같다. 아래를 오토박싱이라 부른다. 
var name = "Philp";
var temp = new String(name);
var firstChar = temp.charAt(0); // name 을 temp 를 통해 위에서 원시 래퍼 타입 String 으로 객체화했기에 charAt 사용 가능
temp = null;
console.log(firstChar);

/** 프로퍼티 추가해도 오토박싱 때문에 추가 안되는 것처럼 보인다  */
var name = "Philp";
name.last = "rogrammer";

console.log(name.last); // undefined

// 위는 아래와 같다
var name = "Philp";
var temp = new String(name);
temp.last = "rogrammer";
temp = null;

var temp = new String(name);
console.log(temp.last); // undefined
temp = null;

/** 원시 래퍼 타입의 인스턴스를 명시적으로 사용하는 건 혼란을 줄 수 있으니 피하는 편이 좋다 */
var found = new Boolean(false);
if (found) { // found 가 객체라 true 취급되서 실행된다.
    console.log("실행된다", found, typeof found); 
}
