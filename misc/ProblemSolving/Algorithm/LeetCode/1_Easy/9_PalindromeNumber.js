/**
 * 9. Palindrome Number
 * https://leetcode.com/problems/palindrome-number/
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }    

    if (x === Number.parseInt(x.toString().split("").reverse().join(""))) {
        return true;
    } else {
        return false;
    }
};