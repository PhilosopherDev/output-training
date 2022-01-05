/**
 * 53_MaximumSubArray.js
 * Easy
 * https://leetcode.com/problems/maximum-subarray/
 * maxSubArray3 참고: https://leetcode.com/problems/maximum-subarray/discuss/1595097/JAVA-or-Kadane
 * @param {number[]} nums
 * @return {number}
 */

// 완전 탐색 time exceeded
var maxSubArray1 = function(nums) {
    let arr = [], max = -Infinity;
    nums.forEach((num) => {
        arr = arr.map((val) => val+num);
        arr.push(num);
        max = Math.max(max, ...arr);
    });
    return max;
};

// 통과 - 부분 확인만으로 충분히 max value 를 찾을 수 있다.
var maxSubArray2 = function(nums) {
    let prevMax = -Infinity, max = -Infinity;
    nums.forEach((num) => {
        prevMax = Math.max(prevMax + num, num);
        max = Math.max(max, prevMax);
    });
    return max;
};

/**
 * 추가적으로 확인할 수 있는 사항들
 * Length of the max subarray
 * Elements of the max subarray
 * Start and End index of max subarray*} nums 
 */
var maxSubArray3 = function(nums) {
    let prevMax = -Infinity, max = -Infinity;
    let start = 0, end = 0;
    nums.forEach((num, idx) => {
        prevMax = Math.max(prevMax + num, num);
        max = Math.max(max, prevMax);
        if (prevMax === max) {
            if (prevMax === num) start = idx;
            end = idx;
        } 
    });
    console.log({startIndex: start, endIndex: end, length: end - start + 1, subArray: nums.slice(start, end + 1)});
    return max;
};

module.exports.maxSubArray = maxSubArray2;