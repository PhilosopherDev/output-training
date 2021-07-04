/**
 * https://leetcode.com/problems/reverse-integer/
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    var reverseNumArr = Math.abs(x).toString().split("").reverse();    
    var zeroRemovedArr = removeZero(reverseNumArr);
    if (x < 0) {
        zeroRemovedArr.unshift("-");
    }
    var resultNum = zeroRemovedArr.join("");
    if (rangeCheck(resultNum)) {
        return resultNum;
    } else {
        return 0;
    }
};

function removeZero(numArr) {
    if (numArr.length === 1 && numArr[0] === 0) {
        return numArr;
    }
    let idx = 0;
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] !== 0) {
            idx = i;
            break;
        }
    }
    return numArr.slice(idx);
}

function rangeCheck(num) {
    if (num < -Math.pow(2, 31) || num >= Math.pow(2, 31)) {
        return false;
    }
    return true;
}