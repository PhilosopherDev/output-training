/**
 * 155. Min Stack
 * Easy
 * https://leetcode.com/problems/min-stack/
 */

/**
 * 1차 
 * faster then 5.44% - 추후 개선의 여지 있음
 */

/**
 * initialize your data structure here.
 */
 var MinStack = function() {
    this._value = [];
    this._sortedValue = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this._value.push(val);
    this._sortedValue.push(val);
    this._sortedValue.sort((a, b) => a - b);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const popValue = this._value.pop();
    const idx = this._sortedValue.indexOf(popValue);
    this._sortedValue.splice(idx, 1);
    return popValue;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this._value[this._value.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this._sortedValue[0];
};