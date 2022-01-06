/**
 * 가운데글자가져오기.js
 * https://programmers.co.kr/learn/courses/30/lessons/12903?language=javascript
 */

function solution(s) {
    let answer = '';
    const len = s.length;
    if (len % 2 === 0) {
        answer += s[len/2 -1];
        answer += s[len/2];
    } else {
        answer += s[Math.floor(len/2)];
    }
    return answer;
}