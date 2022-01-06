/**
 * 두개뽑아서더하기.js
 * https://programmers.co.kr/learn/courses/30/lessons/68644?language=javascript
 */

// combination
function solution(numbers) {
    const numSet = new Set(getCombinationsSum(numbers, 2));

    return Array.from(numSet).sort((a, b) => a - b);
}

function getCombinationsSum(array, selectedNum) {
    const results = [];
    if (selectedNum === 1) {
        return [...array];
    }
    array.forEach((fix, idx, orgArr) => {
        const restArr = orgArr.slice(idx + 1);
        const combination = getCombinationsSum(restArr, selectedNum - 1);
        const attachSum = combination.map((num) => fix + num);
        results.push(...attachSum);
    });

    return results;
} 

module.exports = solution;