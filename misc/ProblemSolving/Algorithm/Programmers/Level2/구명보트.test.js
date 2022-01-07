/**
 * 구명보트.test.js
 */

const solution = require("./구명보트");

test('[70, 50, 80, 50] => 3', () => {
    expect(solution([70, 50, 80, 50], 100)).toBe(3);
});

test('[70, 80, 50] => 3', () => {
    expect(solution([70, 80, 50], 100)).toBe(3);
});