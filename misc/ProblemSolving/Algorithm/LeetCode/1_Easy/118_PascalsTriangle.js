/**
 * 118. Pascal's Triangle
 * https://leetcode.com/problems/pascals-triangle/
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    var answer = [[1], [1,1]];
    if (numRows === 1) {
        return answer.slice(0,1);
    } else if (numRows === 2) {
        return answer;
    }
    
    for (let i=2; i<numRows; i++) {
        var newArr = new Array(i+1);
        for (let j=0; j<i+1; j++) {
            newArr[j] = (answer[i-1][j-1] ? answer[i-1][j-1] : 0) + (answer[i-1][j] ? answer[i-1][j] : 0);
        }
        answer.push(newArr);
    }
    return answer;
};