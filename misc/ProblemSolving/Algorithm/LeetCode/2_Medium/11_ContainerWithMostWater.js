/**
 * 11. Container With Most Water
 * Medium
 * https://leetcode.com/problems/container-with-most-water/
 * @param {number[]} height
 * @return {number}
 */

// 1차 - brute force, 시간 문제로 통과 못함
 var maxArea = function(height) {
    var max = { area: 0, w: 0, h: 0};

    for (let i = height.length - 1; i > 0; i--) {
        var arr = height.slice(0, height.length - 1);
        arr.forEach((h, w) => {
            var minHeight = Math.min(height[i], h);
            var width = i-w;
            if (width > max.w || (width < max.w && minHeight > max.h)) {
                var area = minHeight*(width);
                if (max.area < area) {
                   max.area = area;
                   max.h = minHeight;
                   max.w = width
                }                
            }             
        });
    }
    return max.area;
};

// 2차 - Greedy
/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    var p1 = 0, p2 = height.length - 1;
    var max = {area: 0, height: 0};
    while(p1 !== p2) {
        var minHeight = Math.min(height[p1], height[p2]);
        var width = p2 - p1;
        var area = minHeight * width;
        if (max.area < area) {
            max.area = area;
            max.height = minHeight;
        }
        if (minHeight === height[p1]) {
            p1++;
        } else {
            p2--;
        }
    }
    return maxArea;
};

// 3차 - 속도 개선
/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    var p1 = 0, p2 = height.length - 1;
    var max = {area: 0, height: 0};
    while(p1 !== p2) {
        var minHeight = Math.min(height[p1], height[p2]);
        var width = p2 - p1;
        if (minHeight > max.height) {
            var area = minHeight * width;
            if (max.area < area) {
                max.area = area;
                max.height = minHeight;
            }    
        }
        if (minHeight === height[p1]) {
            p1++;
        } else {
            p2--;
        }
    }
    return max.area;
};