/**
 * https://leetcode.com/problems/maximum-length-of-repeated-subarray/
 * https://leetcode.com/explore/challenge/card/july-leetcoding-challenge-2021/609/week-2-july-8th-july-14th/3807/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findLength = function(nums1, nums2) {
    var maxLength = 0;
    while (nums1.length > 0) {
        for (let i=0; i<nums2.length; i++) {
            if (nums2[i] === nums1[0]) {
                var j = 1;
                while(true) {
                    if (i+j >= nums2.length || j >= nums1.length) {
                        break;
                    }
                    if (nums2[i+j] === nums1[j]) {
                        j++;
                    } else {
                        break;
                    }
                }
                maxLength = Math.max(maxLength, j);
            }
        }
        if (maxLength === nums1.length) {
            break;
        }
        nums1.shift();
    }
    return maxLength;
};