/**
 * https://programmers.co.kr/learn/courses/30/lessons/42586?language=javascript#
 * 기능 개발
 */

 function solution(progresses, speeds) {
    var answer = [];
    while(progresses.length !== 0) {
        const x = Math.ceil((100 - progresses[0]) / speeds[0]);
        let count = 0;
        for (let i = 0; i < progresses.length; i++) {
            progresses[i] = progresses[i] + speeds[i]*x;
        }
        for (let i = 0; i < progresses.length; i++) {
            if (progresses[i] >= 100) {
                count ++;
            } else {
                break;
            }
        }
        answer.push(count);
        progresses.splice(0, count);
        speeds.splice(0, count); // 이걸 추가를 안해줬었다.
    }
    
    return answer;
}