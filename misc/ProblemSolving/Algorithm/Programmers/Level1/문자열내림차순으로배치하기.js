/**
 * 문자열내림차순으로배치하기.js
 * https://programmers.co.kr/learn/courses/30/lessons/12917
 */

function solution1(s) {
    return s.split("").sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0)).join("");
}

function solution2(s) {
    return s.split("").sort().reverse().join("");
}

module.exports = solution1;