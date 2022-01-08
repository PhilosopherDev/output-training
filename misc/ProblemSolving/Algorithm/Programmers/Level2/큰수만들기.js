/**
 * 큰 수 만들기
 * 탐욕법
 * https://programmers.co.kr/learn/courses/30/lessons/42883?language=javascript
 */

// 앞자리 수가 뒷자리 수보다 작으면 삭제
function solution(number, k) {
    var answer = '';
    let i = 0, j = 0;
    while(i < k) {
        number[j] >= number[j+1] ? answer += number[j] : i++;
        j++;
    }
    answer += number.slice(j);

    return answer;
}

// 7, 8, 10 런타임 에러, 12 실패
function solution2(number, k) {
    const numArr = number.split("");
    removeSmallestNum2(numArr, k);
    return numArr.join("");
}

function removeSmallestNum2(array, amount) {
    if (amount === 0) return;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[i+1]) {
            array.splice(i, 1);
            removeSmallestNum2(array, amount - 1);
            break;
        }
    }
}

// 10 시간초과 => splice 문제인듯, 12 실패
function solution3(number, k) {
    if (number.length === k) return "";
    const numArr = number.split("");
    removeSmallestNum3(numArr, k);
    return numArr.join("");
}

function removeSmallestNum3(array, amount) {
    let i = 0;
    while(i < array.length) {
        if (array[i] < array[i+1]) {
            array.splice(i, 1);           
            i === 0 ? i = -1 : i -= 2;
            amount--;
            if (amount === 0) break; 
        }
        i++;
    }
}

function solution4(number, k) {
    var answer = [];
    let i = 0, j = 0;
    while(i < k) {
        if (answer.length === 0 || (number[j] && answer[answer.length - 1] >= number[j])) {
            answer.push(number[j]);
            j++;
        } else {
            answer.pop();
            i++;      
        }
    }
    return answer.join("") + number.slice(j);
}

module.exports = solution4;