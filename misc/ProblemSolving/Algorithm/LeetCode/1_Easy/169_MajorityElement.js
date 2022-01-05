/**
 * 169. Majority Element
 * Easy
 * https://leetcode.com/problems/majority-element/
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    var hashTable = {}, answer;
    if (nums.length === 1) {
        return nums[0];
    }
    for (let i = 0; i < nums.length; i++) {
        if (hashTable[nums[i]] === undefined) {
            hashTable[nums[i]] = 1;
        } else {
            hashTable[nums[i]]++;
            if (hashTable[nums[i]] > (nums.length/2)) {
                answer = nums[i];
                break;
            }
        }
    }
    return answer;
};