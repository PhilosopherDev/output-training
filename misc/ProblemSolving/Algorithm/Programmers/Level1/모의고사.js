/**
 * 모의고사
 * 완전탐색
 * https://programmers.co.kr/learn/courses/30/lessons/42840?language=javascript
 */

 function solution(answers) {
    const supoja = [0, 0, 0];
    const supojaPattern = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    
    answers.forEach((val, idx) => {
        for (let i = 0; i < supojaPattern.length; i++) {
            if (val === supojaPattern[i][idx%supojaPattern[i].length]) supoja[i]++;
        }
    });
    
    const max = Math.max(...supoja);
    return supoja.reduce((rst, matchNum, idx) => {
        if (matchNum === max) rst.push(idx+1);
        return rst;
    }, []);
}

console.log(solution([1,2,3,4,5]));
console.log(solution([1,3,2,4,2]));

