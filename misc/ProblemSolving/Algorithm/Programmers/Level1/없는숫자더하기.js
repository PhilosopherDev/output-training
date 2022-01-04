/**
 * 없는 숫자 더하기
 * https://programmers.co.kr/learn/courses/30/lessons/86051?language=javascript
 */

function solution(numbers) {
    const numSet = new Set(numbers);
    let sum = 0; 
    numSet.forEach((num) => sum+=num);
    return 45 - sum;
}

console.log(solution([1,2,3,4,6,7,8,0]));
console.log(solution([5,8,4,0,6,7,9]));