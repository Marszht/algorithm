// 归并排序 也叫 二分法
// 将一个待排序的队列 递归 分成 一个元素一个元素 进行对比
// 时间复杂度: o(nlogn) Memory: (o(n)), stable： yes
const mergeSort = (arr) => {
  console.time("first");
  function divideArray(array) {
    // console.log(array);
    const len = array.length;
    if (len <= 1) {
      return array;
    }
    let middleIndex = Math.floor(len / 2);
    let leftArray = array.slice(0, middleIndex);
    let rightArray = array.slice(middleIndex, len);
    
    // 递归调用
    let leftArraySort = divideArray(leftArray);
    let rightArraySort = divideArray(rightArray);
    // console.log(leftArraySort, rightArraySort);
    // return rightArraySort
    return compareSortArray(leftArraySort, rightArraySort);
  }

  function compareSortArray(leftArraySort, rightArraySort) {
    let sortArr = [];
    while (leftArraySort.length && rightArraySort.length) {
      let minEle = null;
      if (leftArraySort[0] > rightArraySort[0]) {
        minEle = rightArraySort.shift();
      } else {
        minEle = leftArraySort.shift();
      }
      sortArr.push(minEle);
    }
    if (leftArraySort.length) {
      sortArr = sortArr.concat(leftArraySort);
    }
    if (rightArraySort.length) {
      sortArr = sortArr.concat(rightArraySort);
    }
    return sortArr;
  }
  console.timeEnd("first");

  let a = divideArray(arr);
  return a
};
let arr = [78, 43, 35, 2, 3, 66, 89, 43, 23, 1];
console.log(mergeSort(arr));

