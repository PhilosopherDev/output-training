/**
 * Queue
 * 
 * enqueue
 * dequeue
 * 
 * isEmpty
 * clear
 * size
 */

var Queue = (function() {
    function Queue() {
        this._element = [];
    }

    Queue.prototype.enqueue = function(value) {
        this._element.push(value);
    } 

    Queue.prototype.dequeue = function() {
        return this._element.shift();
    }

    Queue.prototype.isEmpty = function() {
        return this._element.length === 0;
    }

    Queue.prototype.clear = function() {
        this._element = [];
    }

    Queue.prototype.size = function() {
        return this._element.length;
    }

    return Queue;
})();