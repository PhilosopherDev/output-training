/**
 * 121_BestTimeToBuyAndSellStock.js
 * Easy
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */

var maxProfit = function(prices) {
    let currMin = prices[0], currMax = 0, currProfits = [0]; 

    prices.forEach((price) => {
        if (price > currMax) {
            currMax = price;
            currProfits.push(currMax - currMin);
        }
        if (price < currMin) {
            if (currMax > currMin) currProfits.push(currMax - currMin);
            currMin = price;
            currMax = 0;            
        }
    });

    return Math.max(...currProfits);
};

var maxProfit2 = function(prices) {
    let currMin = prices[0], currMax = 0, _maxProfit = 0; 

    prices.forEach((price) => {
        if (price > currMax) {
            currMax = price;
            _maxProfit = Math.max(_maxProfit, currMax - currMin);
        }
        if (price < currMin) {
            if (currMax > currMin) _maxProfit = Math.max(_maxProfit, currMax - currMin);
            currMin = price;
            currMax = 0;            
        }
    });

    return _maxProfit;
};

var maxProfit3 = function(prices) {
    let currMin = prices[0], _maxProfit = 0;

    prices.forEach((price) => {
        if (price - currMin > _maxProfit) _maxProfit = price - currMin;
        if (price < currMin) currMin = price;
    });

    return _maxProfit;
};

// 다른 사람 풀이 - https://leetcode.com/problems/best-time-to-buy-and-sell-stock/discuss/39267/Javascript-solution-if-anyone-is-interested
var maxProfit4 = function(prices) {
    var min = Number.MAX_SAFE_INTEGER; 
    var max = 0;
    prices.forEach((price) => {
        min = Math.min(min, price);
        max = Math.max(max, price - min);
    });
    return max;
};

// 다른 사람 풀이2 - https://leetcode.com/problems/best-time-to-buy-and-sell-stock/discuss/461359/Javascript-O-(n)
var maxProfit5 = function(prices) {
    let min = prices[0], max = 0;
    
    for(let i = 1; i < prices.length; i++){
        if(prices[i] - min > max){
            max = prices[i] - min;
        }
        
        if(prices[i] < min) min = prices[i]
    }
    
    return max;
};

module.exports.maxProfit = maxProfit3;