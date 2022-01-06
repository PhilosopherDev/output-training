/**
 * 2016년.test.js
 */

const solution = require("./2016년");

test('5월 24일', () => {
    expect(solution(5, 24)).toBe("TUE")
});

test('Monday', () => {
    expect(solution(1,4)).toBe("MON")
});

test('Tuesday', () => {
    expect(solution(1,5)).toBe("TUE")
});

test('Wednesday', () => {
    expect(solution(1,6)).toBe("WED")
});

test('Thursday', () => {
    expect(solution(1,7)).toBe("THU")
});

test('Friday', () => {
    expect(solution(1,1)).toBe("FRI")
});

test('Saturday', () => {
    expect(solution(1,2)).toBe("SAT")
});

test('Sunday', () => {
    expect(solution(1,3)).toBe("SUN")
});
