/**
 * https://leetcode.com/problems/valid-parentheses/
 */

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    var stack = new Stack();
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
        }
        if (s[i] === ')') {
            if (stack.pop() !== '(') {
                return false;
            }
        } else if (s[i] === ']') {
            if (stack.pop() !== '[') {
                return false;
            }     
        } else if (s[i] === '}') {
            if (stack.pop() !== '{') {
                return false;
            }      
        }
    }
    
    if (!stack.isEmpty()) {
        return false;
    }
    return true;
};

var Stack = (function() {
    function Stack() {
        this._element = [];
    }

    Stack.prototype.push = function(item) {
        this._element.push(item);
    }

    Stack.prototype.pop = function() {
        return this._element.pop();
    }

    Stack.prototype.peek = function() {
        return this._element[this._element.length];
    }

    Stack.prototype.isEmpty = function() {
        return this._element.length === 0;
    }

    Stack.prototype.clear = function() {
        this._element = [];
    }

    Stack.prototype.size = function() {
        return this._element.length;
    }

    return Stack;
})();