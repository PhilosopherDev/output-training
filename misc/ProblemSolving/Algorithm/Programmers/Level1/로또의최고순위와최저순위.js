/**
 * 로또의 최고 순위와 최저 순위
 * https://programmers.co.kr/learn/courses/30/lessons/77484
 */

function solution(lottos, win_nums) {
    let min = 7, max = 7, match = 0;
    const joker = lottos.reduce((acc, num) => { 
        if (num === 0) acc++;
        return acc; 
    } , 0);

    const lottosWithoutJoker = lottos.filter((num) => num !== 0);
    
    lottosWithoutJoker.forEach((num) => {
        if (win_nums.some((winNum) => winNum === num)) match++
    });

    return [Math.min(max - match - joker, 6), Math.min(min - match, 6)];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));