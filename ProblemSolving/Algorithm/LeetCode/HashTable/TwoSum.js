/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    var answer = [];
    var hashTable = nums.reduce((obj, num, idx) => {
        obj[num] = idx;
        return obj;
    }, {});
    
    for(let i=0; i < nums.length; i++) {
        if (hashTable[target - nums[i]] !== undefined && hashTable[target - nums[i]] !== i) {
            answer.push(i, hashTable[target - nums[i]]);
            break;
        }
    }
    return answer;
};

