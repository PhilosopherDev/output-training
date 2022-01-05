/**
 * 2. Add Two Numbers
 * Medium
 * https://leetcode.com/problems/add-two-numbers/
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    var carry = 0;
    var n1 = l1, n2 = l2;
    var answerNode = new ListNode();
    var nowNode = answerNode;
    
    while (!(n1 === null && n2 === null)) {
        var val = (n1 && n1.val ? n1.val : 0) + (n2 && n2.val ? n2.val : 0);
        val+=carry;
        var nextCarry = 0;
        if (val >= 10) {
            val-=10;
            nextCarry = 1;
        }
        nowNode.val = val;
        carry = nextCarry;
        n1 = n1 && n1.next ? n1.next : null;
        n2 = n2 && n2.next ? n2.next : null;
        if (!(n1 === null && n2 === null)) {
            nowNode.next = new ListNode();
            nowNode = nowNode.next;
        } else if (nextCarry === 1) {
            nowNode.next = new ListNode(1);
            nowNode = nowNode.next;
        }
    }
    
    return answerNode;
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}