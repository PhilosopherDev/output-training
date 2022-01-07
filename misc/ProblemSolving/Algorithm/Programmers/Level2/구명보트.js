/**
 * 구명보트
 * 탐욕법
 * https://programmers.co.kr/learn/courses/30/lessons/42885?language=javascript
 */

// 정확성 2, 8, 14, 15 만 통과, 효율성 4, 5 만 통과
function solution(people, limit) {
    var answer = 0, boat = 0, man = 0;
    people.sort((a, b) => b - a);
    
    while(people.length) {
        if ((people[people.length - 1] + boat <= limit) && man < 2) {
            boat += people.pop();
            man++;
        } else {
            answer++;
            boat = 0;
            man = 0;
        }
    }
    if (boat > 0) answer++;
    return answer;
}

function solution2(people, limit) {
    let answer = 0, idx1 = 0, idx2 = people.length - 1;
    people.sort((a, b) => a - b);

    while (idx1 <= idx2) {
        if (idx1 !== idx2 && people[idx1] + people[idx2] > limit) {
            answer++;
            idx2--;
        } else {
            answer++;
            idx1++;
            idx2--;
        }
    }
    
    return answer;
}

module.exports = solution2;