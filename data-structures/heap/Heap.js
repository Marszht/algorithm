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

  /**
   * @return {*}
   */
  poll() {
    if (this.heapContainer.length === 0) {
      return null;
    }
    if (this.heapContainer.length === 1) {
      return this.heapContainer.pop();
    }

    const item = this.heapContainer[0];
    this.heapContainer[0] = this.heapContainer.pop();
    this.heapifyDown();
    return item;
  }

  /**
   * 
   * @param {*} item 
   * @returns {Heap}
   */
  add(item) {
    this.heapContainer.push(item);
    this.heapifyUp();
    return this;
  }

  remove(item) {
    // 先要找到 item 在堆中的位置 
    let itemsIndexRemove = this.find(item);

    for (let iteration = 0; iteration < itemsIndexRemove.length; iteration++) {
      // 每次选 itemsIndexRemove 数组中的一个， 然后 在堆中进行删除
      const indexToRemove = itemsIndexRemove.pop();

      // 处理一些边界情况
      // 当是最后一个元素的时候，直接pop heapContain 数组
      if (itemsIndexRemove === (this.heapContainer.length - 1)) {
        this.heapContainer.pop();
      } else {
        // 把堆的最后一个元素赋给要删除的元素, 并删除需要删除的元素
        this.heapContainer[itemsIndexRemove] = this.heapContainer.pop();

        // 获取到父元素
        const parentItem = this.parent(indexToRemove);

        if (this.hasLeftChild(indexToRemove) && 
        (
          !parentItem 
          || this.pairIsInCorrectOrder(parentItem, this.heapContainer(indexToRemove))
          )
        ) {
          this.heapifyDown(indexToRemove);
        } else {
          this.heapifyUp(indexToRemove);
        }
      }
    }

    return this;
  }

  /**
   * 找到堆中某个元素位置 ， 可能有多个相同元素，所以是一个数组
   * @param {*} item 
   * @returns {number[]}
   */
     find(item) {
      const foundItemIndices = [];
  
      for(let itemIndex = 0; itemIndex < this.heapContainer.length; itemIndex ++) {
        if (item === this.heapContainer[itemIndex]) {
          foundItemIndices.push(itemIndex);
        }
      }
      return foundItemIndices;
    }

  /**
   * 判断也可以直接使用 length 判断
   * @return {boolean} 
   */
  isEmpty() {
    return !this.heapContainer.length;
  }

  /**
   * 可以直接调用
   * @returns {string}
   */
  toString() {
    return this.heapContainer.toString();
  }



  /**
   * 
   * @param {*} customStartIndex 
   */
  heapifyUp(customStartIndex) {
    // 把最后的元素进行往上调整，让它符合顺序
    let currentIndex = customStartIndex || this.heapContainer.length - 1;
    let nextIndex = null;
    if (this.pairIsInCorrectOrder(this.parent(currentIndex), this.heapContainer[currentIndex])) return;
    while(this.hasParent(currentIndex)) {
      // 循环整个堆 让底部的元素符合堆的性质
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  /**
   * @param {*} customStartIndex 
   */
  heapifyDown(customStartIndex = 0) {
    let currentIndex = customStartIndex;
    let nextIndex = null;

    while(this.hasLeftChild(currentIndex)) {
      // 找到节点中 比较大（大根堆）比较小（小根堆）的孩子节点
      if (this.pairIsInCorrectOrder(this.rightChild(currentIndex), this.leftChild(currentIndex)) && this.hasRightChild(currentIndex)) {
        nextIndex = this.getRightChildIndex(currentIndex);
      } else {
        nextIndex = this.getLeftChildIndex(currentIndex);
      }

      // 然后 再用 上面得出的 子节点 跟父节点 比较，看是否符合顺序
      if (this.pairIsInCorrectOrder(this.heapContainer(currentIndex), this.heapContainer[nextIndex])) {
        break;
      }

      // 不符合顺序交换 父节点 跟子节点 然后 再遍历剩余堆节点
      this.swap(nextIndex, currentIndex);
      currentIndex = nextIndex;
    }
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
