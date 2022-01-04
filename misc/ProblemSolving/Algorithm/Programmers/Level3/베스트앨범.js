/**
 * 베스트 앨범
 * 해시
 * https://programmers.co.kr/learn/courses/30/lessons/42579?language=javascript
 */

function solution(genres, plays) {    
    let answer = [];
    const maxTotal = {}, maxGenre = {};

    genres.forEach((genre, idx) => {
        !maxTotal[genre] ? maxTotal[genre] = plays[idx] : maxTotal[genre] += plays[idx];
        !maxGenre[genre] ? maxGenre[genre] = [{value: plays[idx], index: idx}] : maxGenre[genre].push({value: plays[idx], index: idx});
    });

    Object.keys(maxTotal).map((genre) => {
        return { name: genre, total: maxTotal[genre] };
    })
    .sort((a, b) => b.total - a.total)
    .forEach((obj) => {
        maxGenre[obj.name].sort((a, b) => b.value - a.value);
        for (let i = 0; i<2; i++) {
            const top = maxGenre[obj.name][i];
            if (top) answer = answer.concat(top.index);
        }
    });
    return answer;
}

console.log(solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]));