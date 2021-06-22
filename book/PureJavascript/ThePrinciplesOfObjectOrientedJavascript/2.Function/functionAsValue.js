/**
 * 값으로서의 함수
 * 참조 값을 쓸 수 있는 곳이라면 어디서든 함수도 사용할 수 있다.
 * 함수도 객체라는 사실을 염두에 두고 있으면 상당히 많은 동작을 작성할 수 있다.
 */

function sayHi() {
    console.log("Hi!");
}

sayHi();

const sayHi2 = sayHi;

sayHi2();

const sayHi3 = new Function("console.log(\"HI!!\");");

sayHi3();

const sayHi4 = sayHi3;

sayHi4();

/** 함수를 다른 함수의 인수로 전달 가능 */

var numbers = [1, 5, 8, 4, 7, 10, 2, 6, 3, 9];

// sort 함수에 익명 함수이자, 함수 표현식으로 함수를 인수로 전달한 것이다.
numbers.sort(function(first, second) {
    return first - second;
});

console.log(numbers); // 오름차순으로 잘 나옴

numbers.sort();
console.log(numbers); // string 으로 변환 후 비교하므로 숫자 순으로 나오지 않음, 1 다음 10이 나온다.