
/**
 * 递归方法
 * @param {LinkedListNode} node 
 * @param {Function} callback 
 */
function reverseTraversalRecursive(node, callback) {
  if (node) {
    reverseTraversalRecursive(node.next, callback);
    callback(node.value);
  }
}

/**
 * 反向遍历链表
 * @param {LinkedList} linkedList 
 * @param {Function} callback 
 */
// 1. 使用递归的思路来处理，
// 2. 如果先用 linkedlist 的reverse 在来正向遍历， 但是这种是基于它这个链表定义了 反向方法，或者自己写一个 ，
// 时间复杂度是不是 多了一些 O(2n) 相当于遍历了两次
function reverseTraversal (linkedList, callback) {
  reverseTraversalRecursive(linkedList.head, callback)
}