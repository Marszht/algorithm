const { LinkedListNode } = require("./LinkedListNode.js");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * @param {} value
   * @return {LinkenList}
   */
  append(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  /**
   * @param {object} findParams 
   * @param {*} findParams.value 
   * @param {Function} [findParams.callback ]
   * @returns {LinkedListNode}
   */
  find({value = undefined, callback = undefined}) {
    if (!this.head) return false;

    let currentNode = this.head;

    while (currentNode) {

      // 这个其实可以不用
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      if (value !== undefined && currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }

  /**
   * 添加到链表头部
   * @param {*} value 
   * @returns {LinkedListNode} 
   */
  prepend(value) {
    const newNode = new LinkedListNode(value);

    // 当 LinkedListNode 为空的时候，
    if (!this.tail) {
      this.tail = newNode
    }
    newNode.next = this.head;
    this.head = newNode;
    return this
  }

  /**
   * 
   * @param {*} value 
   * @return {LinkedListNode}
   */
  delete(value) {
    if (!this.head) return null;

    let deletedNode = null;

    // 如果 value是 链表头部
    whild(this.head && value === this.head.value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    // 开始从 head 遍历
    if (currentNode !== null) {
      
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    // 如果value是链表的尾部
    while(this.tail.value === value) {
      this.tail = currentNode
    }
    
    return deletedNode;
  }

  /**
   * @return {LinkedListNode}
   */
  deleteTail() {
    const deletedTail = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }

    // 重新找回 tail , 也就是 前一个节点
    let currentNode = this.head;
    while(currentNode.next) {}
    return deletedTail;
  }

  /**
   * 将链表转换为数组， 类似遍历
   */
  toArray() {
    const nodes = [];
    const currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
  }
}

const liskedList = new LinkedList();

liskedList.append(3)
liskedList.append(4)
liskedList.append(5)
liskedList.find(4);
liskedList.prepend(2);

console.log(liskedList)

// console.log(liskedList.find(4))
