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

  isEmpty() {}
  peek () {}
  toArray() {}

  
}


module.exports = {
  Queue
};