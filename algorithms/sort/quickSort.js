// 快排 选择一个基准 把 小于基准的放在左边,大于基准的放在右边数组, 然后递归处理 左右两个数组
// 当左右数组 为1 的时候退出
// 时间复杂度: o(nlogn) Memory: (log(n)), stable： no
const quickSort = (originArr) => {
  let array = [...originArr];
  console.time("first");
  function divideArray(arr) {
    // 如果当数组数小于1的时候 数组直接有序
    if (arr.length <= 1) {
      return arr;
    }
    let leftArr = [];
    let rightArr = [];
    let pivotEle = arr.shift();
    let centerArr = [pivotEle];

    while (arr.length) {
      let currentElement = arr.shift();
      if (pivotEle > currentElement) {
        leftArr.push(currentElement);
      } else if (pivotEle < currentElement) {
        rightArr.push(currentElement);
      } else {
        centerArr.push(currentElement);
      }
    }
    const leftArraySorted = divideArray(leftArr);
    const rightArraySorted = divideArray(rightArr);
    return leftArraySorted.concat(centerArr, rightArraySorted);
  }
  console.timeEnd("first");
  return divideArray(array);
};
let arr = [78, 43, 35, 2, 3, 66, 89, 43, 23, 1];
// console.log(quickSort(arr));

{
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  var sortArray = function (nums) {
    // 快速排序
    function quickSort(start, end, arr) {
      if (start < end) {
        let mid = sort(start, end, arr);
        // 注意，一定要是 start mid , mid+1 end 这种组合
        // 否则当首位最大的时候(mid返回0)，将会无限循环
        quickSort(start, mid, arr);
        quickSort(mid + 1, end, arr);
      }
      return arr;
    }

    function sort(start, end, arr) {
      // 取基准值
      let base = arr[start];

      let low = start;
      let high = end;

      while (low !== high) {
        // 从后往前，寻找比基准值小的值，赋给low位置(也就是取base值的位置)
        while (arr[high] >= base && high > low) {
          high--;
        }
        arr[low] = arr[high];
        // 从前往后，寻找比基准值大的值，赋给high位置
        while (arr[low] <= base && high > low) {
          low++;
        }
        arr[high] = arr[low];
      }
      arr[low] = base;
      return low;
    }
    return quickSort(0, nums.length - 1, nums);
  };
  let arr = [5, 2, 7, 6, 4];
  console.log(sortArray(arr));
}
