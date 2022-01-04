/**
 * H-index
 * 정렬
 * https://programmers.co.kr/learn/courses/30/lessons/42747?language=javascript
 */

function solution(citations) {
    var answer = 0;

    citations.sort((a, b) => b - a);

    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1) {
            answer++;
        } else {
            break;
        }
    }

    return answer;
}

module.exports = solution;