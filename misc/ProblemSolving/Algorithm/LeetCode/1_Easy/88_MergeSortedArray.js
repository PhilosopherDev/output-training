/**
 * 88_MergeSortedArray.js
 * Easy
 * https://leetcode.com/problems/merge-sorted-array/
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// built-in 사용
var merge1 = function(nums1, m, nums2, n) {
    nums1.splice(m);
    nums1.push(...nums2);
    nums1.sort((a, b) => a - b);
    // console.log({nums1});
};

// 문제 의도 - Two pointer
var merge2 = function(nums1, m, nums2, n) {
    let idx1 = m - 1, idx2 = n - 1, idx3 = m + n - 1;
    while (idx2 >= 0) {
        if (nums1[idx1] >= nums2[idx2]) {
            nums1[idx3] =  nums1[idx1];
            idx3--;
            idx1--;
        } else {
            nums1[idx3] =  nums2[idx2];
            idx3--;
            idx2--;
        }
    }
    // console.log({nums1});
};

merge2([1,2,3,0,0,0], 3, [2,5,6], 3);