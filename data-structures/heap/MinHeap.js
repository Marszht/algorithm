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
const minHeap = new MinHeap();

minHeap.add(2);
minHeap.add(1);
minHeap.add(21);
minHeap.add(43);
minHeap.add(5);

console.log(minHeap);

module.exports = MinHeap;