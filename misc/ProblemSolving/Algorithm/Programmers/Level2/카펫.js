/**
 * 카펫 - 완전 탐색
 * https://programmers.co.kr/learn/courses/30/lessons/42842?language=javascript
 * 가로 >= 세로
 */

/** 1 */
console.log("===1===");
function solution(brown, yellow) {
    const area = brown + yellow;

    for (let i = 1; i<=2501; i++) {
        for (let j =1; j<=2501; j++) {
            if (i*j === area && (2*i + 2*j - 4 === brown)) return [Math.max(i, j), Math.min(i, j)];
        }
    }
}

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));

/** 2 */
console.log("===2===");
function solution2(brown, yellow) {
    const w_plus_h = brown/2 + 2;

    for (let w=1; w<w_plus_h; w++) {
        const h = w_plus_h - w;
        if (w*h === (brown+yellow)) return [Math.max(w, h), Math.min(w, h)];
    }
}

console.log(solution2(10, 2));
console.log(solution2(8, 1));
console.log(solution2(24, 24));