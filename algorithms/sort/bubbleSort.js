//  冒泡排序:  前后两个数比较， 较大（小） 往后（后）移动
//  时间复杂度: o(n^2) Memory: o(1), stable： yes
/**
 *
 * @param {array} arr  待排序数组
 * @returns {array} sortArr 返回已排序数组
 */
{
  // 第一版本
  var bubbleSort = (arr) => {
    // 不改变原数组
    const sortArr = [...arr];
    let len = sortArr.length;
    console.time("first");
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (sortArr[j] > sortArr[j + 1]) {
          // 交换
          // []
          [sortArr[j], sortArr[j + 1]] = [sortArr[j + 1], sortArr[j]];
        }
      }
    }
    // 这种记录时间的方法，需要相同的 tagName
    console.timeEnd("first");
    return sortArr;
  };
  let arr = [78, 43, 35, 2, 3, 66, 89, 43, 23, 1];

  console.log(bubbleSort(arr));
}

{
  // 第二版 因为 每次都能有一个拍好序，
  // 所以，第二层比较可以 不比最后已经拍好序的元素
  var bubbleSort2 = (arr) => {
    // 不改变原数组
    const sortArr = [...arr];
    console.time("second");
    let len = sortArr.length;
    // let pos = len - 1;
    let swapped = false;
    for (let i = 1; i < len; i++) {
      swapped = false;
      for (let j = 0; j <= len - i; j++) {
        if (sortArr[j] > sortArr[j + 1]) {
          // 交换
          [sortArr[j], sortArr[j + 1]] = [sortArr[j + 1], sortArr[j]];
          swapped = true
        }
      }
      // --pos;
      if (!swapped) {
        return array;
      }
    }
    console.timeEnd("second");
    return sortArr;
  };

  let arr = [78, 43, 35, 2, 3, 66, 89, 43, 23, 1];

  console.log(bubbleSort2(arr));
}
