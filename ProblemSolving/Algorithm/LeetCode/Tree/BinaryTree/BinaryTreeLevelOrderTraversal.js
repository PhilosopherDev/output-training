/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    var bt = new BinaryTree(root);
    bt.levelOrderTraversal();
    return bt.getLevelOrderResult();
};

var BinaryTree = (function() {
    function BinaryTree(root) {
        this._root = root;
        this._result = [];
    }
    
    BinaryTree.prototype.levelOrderTraversal = function() {
        var queue = [];
        queue.push({node: this._root, level: 0});
        while (queue.length) {
            var item = queue.shift();
            if (item.node) {
                if (!this._result[item.level]) {
                    this._result[item.level] = [];
                } 
                this._result[item.level].push(item.node.val);
                if (item.node.left) {
                    queue.push({node: item.node.left, level: item.level+1});
                }
                if (item.node.right) {
                    queue.push({node: item.node.right, level: item.level+1});
                }    
            }
        }
    }
    
    BinaryTree.prototype.getLevelOrderResult = function() {
        return this._result;
    }
    
    return BinaryTree;
})();