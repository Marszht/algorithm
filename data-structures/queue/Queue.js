const { LinkedList } = require("../linked-list/LinkedList");

class Queue {
  constructor () {
    // 也采用，链表形式处理
    this.linkedList = new LinkedList();
  }
  /**
   * 入队
   * @param {*} value 
   */
  enqueue(value) {
    this.linkedList.append(value);
  }

  /**
   * 
   * @return {*} 
   */
  outqueue(value) {
    const removeHead = this.linkedList.deleteHead();
    return removeHead ? removeHead.value : null;
  }

  // 判断这个队列是否为空
  isEmpty() {
    return !this.linkedList.head;
  }

  // 取队首第一个元素值
  peek () {
    if (!this.linkedList.head) { return null; }
    return this.linkedList.head.value;
  }

  toArray() {
    return this.linkedList.toArray().map(currentNode => currentNode.value);
  }

  
}


module.exports = {
  Queue
};