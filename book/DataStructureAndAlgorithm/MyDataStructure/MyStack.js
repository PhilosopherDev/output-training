/**
 * Stack
 * 
 * push
 * pop
 * peek
 * isEmpty
 * clear
 * size
 */


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
        return this._element[this._element.length - 1];
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