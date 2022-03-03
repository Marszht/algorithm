
/**
 * 遍历链表
 * @param {LinkedList} linkedList 
 * @param {Function} callback
 */
function traversal(linkedList, callback) {
  const currentNode = linkedList.head;

  while (currentNode) {
    callback && callback(currentNode.value);
    currentNode = currentNode.next;
  }
}

module.exports = {
  traversal
}