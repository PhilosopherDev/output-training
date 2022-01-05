/**
 * 실패율.test.js
 */

const { solution } = require("./실패율")

test('[2, 1, 2, 6, 2, 4, 3, 3]', () => {
    expect(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])).toEqual([3,4,2,1,5]);
});

test('[4,4,4,4,4]', () => {
    expect(solution(4, [4,4,4,4,4])).toEqual([4,1,2,3]);
});
