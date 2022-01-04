/**
 * 가장 큰 수
 * 정렬
 * https://programmers.co.kr/learn/courses/30/lessons/42746?language=javascript
 * 
 */

function solution(numbers) {
    const answer =  numbers.map((num) => num.toString()).sort((a, b) => {
        const pre = parseInt(a + b);
        const post = parseInt(b + a);

        return post - pre;
    }).join("");    

    if (answer[0] === '0') return '0';
    return answer;
}

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
console.log(solution([0, 0, 0, 0])); // 11번 테스트 케이스