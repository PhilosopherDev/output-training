/**
 * 숫자 문자열과 영단어
 * https://programmers.co.kr/learn/courses/30/lessons/81301?language=javascript 
 */

function solution(s) {
    var answer = [], str = "";

    for (let i = 0; i < s.length; i++) {
        const numChar = parseInt(s[i]);
        if (isNaN(numChar)) {
            str += s[i];
            const changedNum = changeStringToInt(str);
            if (changedNum !== null) {
                answer.push(changedNum);
                str = "";
            }
        } else {
            answer.push(numChar);
        }
    }

    return parseInt(answer.join(""));
}

function changeStringToInt(s) {
    switch (s) {
        case "zero": 
            return 0;
        case "one":
            return 1; 
        case "two":
            return 2;
        case "three":
            return 3;
        case "four":
            return 4;
        case "five":
            return 5
        case "six":
            return 6;
        case "seven":
            return 7;
        case "eight":
            return 8;
        case "nine": 
            return 9;
        default:
            return null;
    }
}

console.log(solution("one4seveneight"));
console.log(solution("23four5six7"));
console.log(solution("2three45sixseven"));
console.log(solution("123"));