/**
 * 144. Binary Tree Preorder Traversal
 * Easy
 * https://leetcode.com/problems/binary-tree-preorder-traversal/
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
 var preorderTraversal = function(root) {
    var bt = new BinaryTree(root);
    // bt.traversePreOrderRecursive();
    bt.traversePreOrderIterative();
    return bt.getPreOrder();
};


var BinaryTree = (function() {
    function BinaryTree(root) {
        this._root = root;
        this._result = [];
    }    

    // recursive
    BinaryTree.prototype.traversePreOrderRecursive = function() {
        traversePreOrderHelper = traversePreOrderHelper.bind(this);
        traversePreOrderHelper(this._root);
        
        function traversePreOrderHelper(node) {
            if (!node) {
                return;
            }
            this._result.push(node.val);
            traversePreOrderHelper(node.left);
            traversePreOrderHelper(node.right);
        }
    }

    // iterative
    BinaryTree.prototype.traversePreOrderIterative = function() {
        var stack = [];
        stack.push(this._root);
        while(stack.length) {
            var node = stack.pop();
            if (node) {
                this._result.push(node.val);
            
                // 오른 쪽부터 stack에 넣어줘야 왼쪽부터 꺼내서 써서 preorder 가 된다. 
                if (node.right) {
                    stack.push(node.right);
                }
                if (node.left) {
                    stack.push(node.left);
                }
            }
        }
    }
    
    BinaryTree.prototype.getPreOrder = function() {
        return this._result;
    }
    
    return BinaryTree;
})();

