/**
 * 두개뽑아서더하기.test.js
 */

const solution = require("./두개뽑아서더하기");

test('[2,1,3,4,1]', () => {
    expect(solution([2,1,3,4,1])).toEqual([2,3,4,5,6,7]);
});

test('[5,0,2,7]', () => {
    expect(solution([5,0,2,7])).toEqual([2,5,7,9,12]);
});
