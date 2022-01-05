/**
 * 94. Binary Tree Inorder Traversal
 * Easy
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    var bt = new BinaryTree(root);
    // bt.traverseInOrderRecursive();
    bt.traverseInOrderIterative();
    return bt.getInOrderResult();
};

var BinaryTree = (function() {
    function BinaryTree(root) {
        this._root = root;
        this._result = [];
    }
    
    BinaryTree.prototype.traverseInOrderRecursive = function() {
        traverseInOrderHelper = traverseInOrderHelper.bind(this);
        traverseInOrderHelper(this._root);
        
        function traverseInOrderHelper(node) {
            if (!node) {
                return;
            }
            traverseInOrderHelper(node.left);
            this._result.push(node.val);
            traverseInOrderHelper(node.right);
        }
    }
    
    BinaryTree.prototype.traverseInOrderIterative = function() {
        var current = this._root, stack = [], done = false;
        while(!done) {
            if (current !== null) {
                stack.push(current);
                current = current.left;
            } else {
                if (stack.length) {
                    current = stack.pop();
                    this._result.push(current.val);
                    current = current.right;
                } else {
                    done = true;
                }
            }
        }
    }
    
    BinaryTree.prototype.getInOrderResult = function() {
        return this._result;
    }
    
    return BinaryTree;
})();