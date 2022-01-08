/**
 * 큰수만들기.test.js
 */

const solution = require("./큰수만들기");

test("1924", () => {
    expect(solution("1924", 2)).toBe("94");
});

test("1231234", () => {
    expect(solution("1231234", 3)).toBe("3234");
});

test("4177252841", () => {
    expect(solution("4177252841", 4)).toBe("775841");
});

test("4321", () => {
    expect(solution("4321", 2)).toBe("43");
});
