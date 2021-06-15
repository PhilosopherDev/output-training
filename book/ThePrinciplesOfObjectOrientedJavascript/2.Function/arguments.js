/**
 * 인자 - parameter (매개변수)
 * 인수 - argument (실행인자)
 * 
 * 함수 안에서는 arguments 객체가 자동으로 만들어진다.
 * 
 */

function argumentsTest(a, b) {
    console.log(arguments);
    console.log(typeof arguments); // object
    console.log(Array.isArray(arguments)); // 배열과 비슷하나 배열이 아니다. 
    console.log(arguments.length);
    console.log(arguments.__proto__); // [Object: null prototype] {}
}

argumentsTest(1,2); // [Arguments] { '0': 1, '1': 2 }, object, false, 2, [Object: null prototype] {}

// 함수 생성시 선언한 매개변수의 개수보다 더 많이 혹은 더 적게도 할당 가능하다. 에러 안난다.
argumentsTest(1);
argumentsTest(1,2,3,4,5,6);

/**
 * 함수도 객체다.
 * 함수도 property를 가질 수 있다. 
 * 함수 자체도 length property 를 가지고 있다. = 함수에서 선언한 인수의 개수
 */
console.log(argumentsTest.length); // 2

// arguments를 활용해 인수가 몇 개가 될지 모르는 상황에서의 함수도 생성 가능하다.
function sum() {
    var result = 0, i = 0, len = arguments.length;

    while(i < len) {
        result += arguments[i];
        i++;
    }
    
    return result;
}

console.log(sum.length); // 0

console.log(sum(1,2)); // 3
console.log(sum(3,4,5,6)); // 18
console.log(sum(50)); // 50
console.log(sum()); // 0