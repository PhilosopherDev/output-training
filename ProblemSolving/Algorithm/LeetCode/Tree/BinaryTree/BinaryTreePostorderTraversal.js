/**
 * https://leetcode.com/problems/binary-tree-postorder-traversal/
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
 var postorderTraversal = function(root) {
    var bt = new BinaryTree(root);
    // bt.traversePostOrderRecursive();
    bt.traversePostOrderIterative();
    return bt.getPostOrderResult();
};

var BinaryTree = (function() {
    function BinaryTree(root) {
        this._root = root;
        this._result = [];
    }
    
    BinaryTree.prototype.traversePostOrderRecursive = function() {
        traversePostOrderHelper = traversePostOrderHelper.bind(this);
        traversePostOrderHelper(this._root);
        
        function traversePostOrderHelper(node) {
            if (!node) {
                return;
            }
            traversePostOrderHelper(node.left);
            traversePostOrderHelper(node.right);
            this._result.push(node.val);
        }
    }
    
    BinaryTree.prototype.traversePostOrderIterative = function() {
        var s1 = [], s2 = [];
        s1.push(this._root);
        while(s1.length) {
            var node = s1.pop();
            if (node) {
                s2.push(node);
                if (node.left) {
                    s1.push(node.left);    
                }
                if (node.right) {
                    s1.push(node.right);
                }    
            }
        }
        while(s2.length) {
            var node = s2.pop();
            this._result.push(node.val);
        }
    }
    
    BinaryTree.prototype.getPostOrderResult = function() {
        return this._result;
    }
    
    return BinaryTree;
})();