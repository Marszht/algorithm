// 堆排序
//  时间复杂度: o() Memory: o(1), stable： no

const MinHeap = require("../../data-structures/heap/MinHeap");

const heapSort = (originalArr) => {
  let sortArray = [];
  const minHeap = new MinHeap();
  originalArr.forEach(element => {
    minHeap.add(element);
  });

  while(!minHeap.isEmpty) {
    const nextElement = minHeap.poll();

    sortArray.push(nextElement);
  }

  return sortArray;
}
let arr = [78, 43, 35, 2, 3, 66, 89, 43, 23, 1];
console.log(heapSort(arr));
