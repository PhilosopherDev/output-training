/**
 * 350_IntersectionOfTwoArraysII.js
 * Easy
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/
 */

var intersect = function(nums1, nums2) {
    let small, big, answer = [], idxHash = {}; 
    if (nums1.length <= nums2.length) {
        small = nums1;
        big = nums2;
    } else {
        small = nums2;
        big = nums1;
    }  

    small.forEach((num) => {
        const idx = idxHash[num] === undefined ? big.indexOf(num) : big.indexOf(num, idxHash[num] + 1);
        if (idx > -1) {
            idxHash[num] = idx;
            answer.push(num);
        }
    });
    
    return answer;
};

// big, small 안 나눈 것.
var intersect2 = function(nums1, nums2) {
    const answer = [], idxHash = {}; 

    nums1.forEach((num) => {
        const idx = idxHash[num] === undefined ? nums2.indexOf(num) : nums2.indexOf(num, idxHash[num] + 1);
        if (idx > -1) {
            idxHash[num] = idx;
            answer.push(num);
        }
    });
    
    return answer;
};

module.exports.intersect = intersect2;