const { LinkedListNode }  = require('../linked-list/LinkedListNode');

class Stack {
  constructor () {
    // 使用链表来处理栈
    this.linkedList = new LinkedListNode();
  }

  /**
   * 增加节点
   * @param {*} value 
   */
  push (value) {
    // 直接在链表结尾增加节点
    this.linkedList.append(value);
  }

  /**
   * @return {*}
   */
  pop () {
    const removeHead = this.linkedList.deleteHead();
    return removeHead ? removeHead.value : null;
  }
}