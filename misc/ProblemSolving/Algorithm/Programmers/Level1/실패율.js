/**
 * 실패율.js
 * https://programmers.co.kr/learn/courses/30/lessons/42889
 */

function solution(N, stages) {
    const stageReached = new Array(N+1).fill(0);

    stages.forEach((stage) => {
        for (let i = 0; i < stage; i++) {
            stageReached[i]++;
        }
    });

    const stageFailed = [];
    for (let j = 0; j < stageReached.length - 1; j++) {
        const failureRate = (stageReached[j] - stageReached[j+1]) / (stageReached[j]);
        stageFailed.push({failureRate, stage: j+1});
    }

    return stageFailed.sort((a, b) => b.failureRate - a.failureRate).map((obj) => obj.stage);
}

module.exports.solution = solution;