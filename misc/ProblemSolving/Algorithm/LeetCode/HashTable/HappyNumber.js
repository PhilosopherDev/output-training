/**
 * https://leetcode.com/problems/happy-number/
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    var memoize = {};
    var happy = n;
    while (happy !== 1) {
        var tmp = happy;
        happy = sumOfSquares(happy);
        if (memoize[tmp] === undefined) {
            memoize[tmp] = happy;
        } else {
            break;
        }
    }
    if (happy === 1) {
        return true;
    }
    return false;
};

function sumOfSquares(n) {
    return n.toString().split("").reduce((num, item) => {
        num += Math.pow(Number.parseInt(item), 2);
        return num;
    }, 0)
}