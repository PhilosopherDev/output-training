/**
 * 2016년.js
 * https://programmers.co.kr/learn/courses/30/lessons/12901?language=javascript
 */

// 9번, 13번 테스트 케이스 실패
function solution1(a, b) {
    var mon = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    
    const acc_mon = [0];
    for (let i = 0; i < mon.length - 1; i++) {
        acc_mon.push(acc_mon[i] + mon[i]);
    }
    
    return day[((acc_mon[a - 1] + b) % 7) - 1];
}


function solution2(a, b) {
    var mon = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var day = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
    
    const acc_mon = [0];
    for (let i = 0; i < mon.length - 1; i++) {
        acc_mon.push(acc_mon[i] + mon[i]);
    }
    
    return day[((acc_mon[a - 1] + b) % 7)];
}

module.exports = solution2;