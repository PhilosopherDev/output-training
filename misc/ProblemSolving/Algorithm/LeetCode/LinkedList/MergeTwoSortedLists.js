/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
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
 var mergeTwoLists = function(l1, l2) {
    var node = new ListNode();
    var firstNode = node;
    if (l1 === null && l2 === null) {
        return null;
    }
        
    while (!(l1 === null && l2 === null)) {    
        if (l1 === null) {
            node.val = l2.val;
            node.next = l2.next;
            break;
        }
        if (l2 === null) {
            node.val = l1.val;
            node.next = l1.next;
            break;
        }
        
        if (l1.val <= l2.val) {
            node.val = l1.val;
            l1 = l1.next;
            node.next = new ListNode();
            node = node.next;
        } else {
            node.val = l2.val;
            l2 = l2.next;
            node.next = new ListNode();
            node = node.next;
        }    
    }
    return firstNode;
};

function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}