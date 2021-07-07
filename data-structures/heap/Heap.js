export class Heap {
  constructor() {
    if (new.target === Heap) {
      //  需要指定为 最大堆 最小堆
      throw new TypeError("不能直接使用堆创建实例");
    }
    // 用一个数组存 堆中数据
    this.heapContainer = [];
  }

  /**
   * @param {*} parentIndex
   * @returns {number}
   */
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  /**
   * @param {*} parentIndex
   * @returns {number}
   */
  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  /**
   * @param {*} childIndex 
   * @returns {number}
   */
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

/**
 * @param {number} childIndex 
 * @returns {boolean} 
 */
  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0
  }

  /**
   * @param {number} parentIndex 
   * @returns {boolean}
   */
  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
  }

  /**
   * @param {number} parentIndex 
   * @returns {boolean}
   */
  hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
  }

  /**
   * @param {number} pardntIndex 
   * @returns {*}
   */
  leftChild(parentIndex) {
    // 需要判断一下是否有 leftChild 吗？ 不需要，因为取不到 就是undefined, 
    return this.heapContainer[this.getLeftChildIndex(parentIndex)];
  }

  /**
   * @param {number} pardntIndex 
   * @returns {*}
   */
  rightChild(parentIndex) {
    return this.heapContainer[this.getRightChildIndex(parentIndex)];
  }

  /**
   * @param {number} pardntIndex 
   * @returns {*}
   */
  parent(childIndex) {
    return this.heapContainer[this.getParentIndex(childIndex)];
  }

  /**
   * 交换两个元素
   * @param {number} indexOne 
   * @param {number} indexTwo 
   */
  swap(indexOne, indexTwo) {
    [this.heapContainer[indexOne], this.heapContainer[indexTwo]] = [this.heapContainer[indexTwo], this.heapContainer[indexOne]]
  }

/**
 * 
 * @returns {*}
 */
  peek() {
    if (this.heapContainer.length === 0) {
      return null;
    }
    return this.heapContainer[0];
  }

  poll() {
    if (this.heapContainer.length === 0) {
      return null;
    }
    // if (this.)
  }

  /**
   * 
   * @param {*} firstElement 
   * @param {*} secondElement 
   * @return {boolean}
   */
  pairIsInCorrectOrder(firstElement, secondElement) {
    throw new Error("你需要重写Heap 中的pairIsInCorrectOrder方法")
  }
}
