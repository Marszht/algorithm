const { LinkedListNode } = require("./LinkedListNode.js");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * 添加到链表尾部
   * @param {} value
   * @return {LinkenList}
   */
  append(value) {
    const newNode = new LinkedListNode(value);

    // 如果链表没有节点，则新节点是头部也是尾部
    // 就是可能需要考虑一些情况，
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    // 新节点插入到链表尾部，新节点为新链表的尾部
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  /**
   * @param {object} findPa rams
   * @param {*} findParams.value
   * @param {Function} [findParams.callback ]
   * @returns {LinkedListNode}
   */
  find({ value = undefined, callback = undefined }) {
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
   * 跟 append 的操作相反
   * @param {*} value
   * @returns {LinkedListNode}
   */
  prepend(value) {
    const newNode = new LinkedListNode(value);

    // 当 LinkedListNode 为空的时候，
    if (!this.tail) {
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }

  /**
   *
   * @param {*} value
   * @return {LinkedListNode}
   */
  delete(value) {
    if (!this.head) return null;

    let deletedNode = null; // 找到这个deleteNode 然后从链表中移除

    // 如果 value是 链表头部
    while (this.head && value === this.head.value) {
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
    while (this.tail.value === value) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  /**
   * 删除尾部 元素
   * @return {LinkedListNode}
   */
  deleteTail() {
    const deletedTail = this.tail;

    // 如果只有一个节点，tail 也就是 head
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return deletedTail;
    }

    // 重新找回 tail , 也就是 tail前一个节点
    let currentNode = this.head;
    while (currentNode.next) {
      // 跟下面的实现一样
      if (currentNode.next !== deletedTail) {
        currentNode = currentNode.next;
      } else {
        currentNode.next = null;
        this.tail = currentNode;
        return deletedTail;
      }
      // 这个表示 currentNode.next 为 tail
      // if (!currentNode.next.next) {
      //   currentNode.next = null;
      // } else {
      //   currentNode = currentNode.next;
      // }
    }
    // this.tail = currentNode;
    return deletedTail;
  }

  /**
   * 删除头部 节点
   * @return {LinkedListNode}
   */
  deleteHead() {
    let deletedHead = this.head;
    if (!deletedHead) {
      return null;
    }

    // 如果 只有一个元素
    if (deletedHead === this.tail) {
      this.head = null;
      this.tail = null;
    }
    let currentNode = this.head;
    if (currentNode.next) {
      this.head = currentNode.next;
    }
    return deletedHead;
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

  /**
   * 把一个数组转换为链表， 就是遍历 数组，然后 append
   * @param {[]]} values
   * @return {LinkedList}
   */
  fromArray(values) {
    values.forEach((item) => this.append(item));
    return this;
  }

  reverse() {}
}

const liskedList = new LinkedList();

liskedList.append(3);
liskedList.append(4);
liskedList.append(5);
liskedList.prepend(2);
liskedList.delete(2);
liskedList.deleteTail();
liskedList.deleteTail();
// liskedList.deleteTail();

console.log(liskedList);

// console.log(liskedList.find(4))
