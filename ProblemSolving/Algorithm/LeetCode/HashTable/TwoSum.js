/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    var answer = [];
    // O(n)
    var hashTable = nums.reduce((obj, num, idx) => {
        obj[num] = idx;
        return obj;
    }, {});
    
    // O(n)
    for(let i=0; i < nums.length; i++) {
        // O(1)
        if (hashTable[target - nums[i]] !== undefined && hashTable[target - nums[i]] !== i) {
            answer.push(i, hashTable[target - nums[i]]);
            break;
        }
    }
    // O(n + n*1) => O(2n) => O(n)
    return answer;
};

