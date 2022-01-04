const maxValue = require("./가장큰수");

test('[6, 10, 2]', () => {
    expect(maxValue.solution([6, 10, 2])).toBe("6210");
});

test('[3, 30, 34, 5, 9]', () => {
    expect(maxValue.solution([3, 30, 34, 5, 9])).toBe("9534330");
});

test('[0, 0, 0, 0] - 11번 테스트 케이스', () => {
    expect(maxValue.solution([0, 0, 0, 0])).toBe("0");
});
