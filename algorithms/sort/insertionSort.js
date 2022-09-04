// 插入排序：。它的工作原理是通过构建有序序列，对于未排序数据，
// 在已排序序列中从后向前扫描，找到相应位置并插入
//  时间复杂度: o(n^2) Memory: o(1), stable： yes
/**
 *
 * @param {array} arr  待排序数组
 * @returns {array} sortArr 返回已排序数组
 */

var insertionSort = (arr) => {
  const sortArr = [...arr];
  let len = sortArr.length;
  console.time("插入排序耗时：");
  let swapped = false;
  for (var i = 1; i < len; i++) {
    swapped = false;
    for (let j = i - 1; j >= 0; j--) {
      if (sortArr[j] > sortArr[j + 1]) {
        swapped = true;
        [sortArr[j], sortArr[j + 1]] = [sortArr[j + 1], sortArr[j]];
      }
    }
    if (!swapped) {
      console.log("dads");
      console.timeEnd("插入排序耗时：");
      return sortArr;
    }
  }
  // console.timeEnd("插入排序耗时：");
  // return sortArr;
};

let arr = [1, 43, 35, 2, 3, 66, 89, 43, 23, 78];

console.log(insertionSort(arr));
