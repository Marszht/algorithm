const Heap = require("./Heap");

 class MinHeap extends Heap {

  /**
   * 判断当前两个元素是否在堆中符合位置，
   * 小根堆中 第一个元素必须小于等于 后面的元素
   * 大根堆中 第一个元素 >= 后面的元素
   * @param {*} firstElement 
   * @param {*} secondElement 
   * @returns {boolean}
   */
  pairIsInCorrectOrder(firstElement, secondElement) {
    return firstElement <= secondElement;
  }
}

module.exports = MinHeap;