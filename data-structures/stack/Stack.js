const { LinkedList }  = require('../linked-list/LinkedList');

class Stack {
  constructor () {
    // 使用链表来处理栈
    this.linkedList = new LinkedList();
  }

  /**
   * 增加节点
   * @param {*} value 
   */
  push (value) {
    // 直接在链表头部增加节点
    this.linkedList.prepend(value);
  }

  /**
   * @return {*}
   */
  pop () {
    const removeHead = this.linkedList.deleteHead();
    return removeHead ? removeHead.value : null;
  }

  toArray() {
    return this.linkedList.toArray().map(currentNode => currentNode.value);
  }

  /**
   * 判断当前栈是否为空，
   * 就把很多小功能抽取出成一个函数
   * 功能单一
   * @return {boolean}
   */
  isEmpty() {
    return !this.linkedList.head;
  }

  /**
   * 返回栈顶元素值
   * @returns {*}
   */
  peek () {
    if (this.isEmpty()) {return null;}
    return this.linkedList.head.value;
  }

}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
let arr = stack.toArray();
console.log(stack);
console.log(arr);

module.exports = {
  Stack
}