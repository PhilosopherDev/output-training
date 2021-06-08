/**
 * prototype 을 사용하면 기본 내장 객체도 수정할 수 있다. 
 * 하지만 실제 프로젝트에선 가능하면 수정하지마라. 
 */

/** Ex 1 */
Array.prototype.sum = function() {
    console.log(this); // 여기서 this 는 곧 이 sum method 를 호출한 array 이다. 
    return this.reduce(function(prev, curr) {
        return prev + curr;
    }); // 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용합니다. 빈 배열에서 초기값 없이 reduce()를 호출하면 오류가 발생합니다.

}

var numbers = [1,2,3,4,5,6];
var result = numbers.sum(); // this 가 곧 numbers
console.log(result);

/** Ex 2 */
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.substring(1);
}

var message = "hello world!!";
console.log(message.capitalize()); // Hello world!!