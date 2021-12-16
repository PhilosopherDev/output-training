/**
 * 이진 트리
 */

function BinaryTree(node) {
    this._root = node || null;
}

function BinaryTreeNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

BinaryTree.prototype.traversePreOrder = function() {
    traversePreOrderHelper(this._root);

    function traversePreOrderHelper(node) {
        if (!node) {
            return;
        }
        console.log(node.value);
        traversePreOrderHelper(node.left);
        traversePreOrderHelper(node.right);
    }
}

BinaryTree.prototype.traverseInOrder = function() {
    traverseInOrderHelper(this._root);

    function traverseInOrderHelper(node) {
        if (!node) {
            return;
        }
        traverseInOrderHelper(node.left);
        console.log(node.value);
        traverseInOrderHelper(node.right);
    }
}

BinaryTree.prototype.traversePostOrder = function() {
    traversePostOrderHelper(this._root);

    function traversePostOrderHelper(node) {
        if (!node) {
            return;
        }
        traversePostOrderHelper(node.left);
        traversePostOrderHelper(node.right);
        console.log(node.value);
    }
}

/** Level order = BFS */
BinaryTree.prototype.traverseLevelOrder = function() {
    var root = this._root, queue = [];

    if (!root) {
        return;
    }
    queue.push(root);
    while(queue.length) {
        var temp = queue.shift();
        console.log(temp.value);
        if (temp.left) {
            queue.push(temp.left);
        }
        if (temp.right) {
            queue.push(temp.right);
        }
    }
}

var node1 = new BinaryTreeNode(42);
var bt = new BinaryTree(node1);

var node2 = new BinaryTreeNode(41);
var node3 = new BinaryTreeNode(10);
var node4 = new BinaryTreeNode(40);
var node5 = new BinaryTreeNode(50);
var node6 = new BinaryTreeNode(45);
var node7 = new BinaryTreeNode(75);

node1.left = node2;
node1.right = node5;
node2.left = node3;
node2.right = node4;
node5.left = node6;
node5.right = node7;

bt.traversePreOrder();
console.log("----------------");
bt.traverseInOrder();
console.log("----------------");
bt.traversePostOrder();
console.log("----------------");
bt.traverseLevelOrder();