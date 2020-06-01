// 选择排序
// 每趟找到最大（小）的一个数 插入到数组尾部（头部）
  /**
   * 
   * @param {array} arr  待排序数组
   * @returns {array} sortArr 返回已排序数组
  */


  var selectionSort = (arr) => {
    const sortArr = [...arr];
    let len = sortArr.length;
    let temp;
    console.time('selectionSort');
    for(let i = 0; i < len; i++) {
      let minValueIndex = i;
      for (let j = i + 1; j < len; j++) {
         if (sortArr[minValueIndex] > sortArr[j]) {
           minValueIndex = j;
         }
      }
      [sortArr[i], sortArr[minValueIndex]] = [sortArr[minValueIndex],sortArr[i]];
    }
    console.timeEnd('selectionSort')
    return sortArr;


  }

  let arr = [78,43,35,2,3,66,89,43, 23, 1]

  console.log(selectionSort(arr));