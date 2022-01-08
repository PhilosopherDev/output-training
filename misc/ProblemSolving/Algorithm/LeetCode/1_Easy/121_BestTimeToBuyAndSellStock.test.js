/**
 * 121_BestTimeToBuyAndSellStock.test.js
 */

const {maxProfit} = require("./121_BestTimeToBuyAndSellStock");

test('[7,1,5,3,6,4] => 5', () => {
    expect(maxProfit([7,1,5,3,6,4])).toBe(5);
});

test('[7,6,4,3,1] => 0', () => {
    expect(maxProfit([7,6,4,3,1])).toBe(0);
});