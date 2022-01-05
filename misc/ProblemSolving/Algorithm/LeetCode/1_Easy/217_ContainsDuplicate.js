/**
 * 217_ContainsDuplicate.js
 * Easy
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numHash = {};
    for (let i = 0; i < nums.length; i++) {
        if (!numHash[nums[i]]) {
            numHash[nums[i]] = 1;
        } else {
            return true;
        }
    }
    return false;
};

module.exports.containsDuplicate = containsDuplicate;