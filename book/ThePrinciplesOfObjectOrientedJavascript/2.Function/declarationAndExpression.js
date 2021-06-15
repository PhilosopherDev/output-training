/** 
 * 함수의 두가지 리터럴 형태
 * 1. 함수 선언 
 * 2. 함수 표현식 / 익명 함수
 */


/** hoisting 여부 */
 console.log(add(1,2)); // 3
//  console.log(add2); // error

/** 
 * 함수 선언 
 * hoisting 된다.
 */
function add(num1, num2) {
    return num1 + num2;
}

/** 
 * 함수 표현식 
 * 변수 할당이라 hoisting 되지 않는다.
 */
const add2 = function(num1, num2) {
    return num1 + num2;
};




