
/**
 * 链表节点类，
 * 用于新建新的节点，
 */
class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`
  }
}

module.exports = {
  LinkedListNode
}