/**
 * https://leetcode.com/problems/single-number/
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    var answer = nums[nums.length-1];
    for (let i = 0; i < nums.length - 1 ; i++) {
        if (nums.indexOf(nums[i], i+1) === -1 && nums.indexOf(nums[i]) === i) {
            answer = nums[i];
            break;
        }
    }    
    return answer;
};