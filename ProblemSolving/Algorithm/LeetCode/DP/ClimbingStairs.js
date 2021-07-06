/**
 * https://leetcode.com/problems/climbing-stairs/
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    return getSteps(n);
    
};

var memoize = {0: 1, 1: 1, 2: 2, 3: 3};

var getSteps = function(n) {
    if (memoize[n]) {
        return memoize[n];
    } else if (n < 0) {
        return 0;
    } else {
        var a = getSteps(n-1);
        var b = getSteps(n-2);
        if (!memoize[n-1]) {
            memoize[n-1] = a;
        }
        if (!memoize[n-2]) {
            memoize[n-2] = b;
        }
        return a + b;
    }
}