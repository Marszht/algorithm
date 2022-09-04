// 希尔排序
// 改进的插入排序。

const shellSort = (arr) => {
  const sortArray = [...arr];

  const len = sortArray.length;
  let gap = Math.floor(len / 2);
  console.time("shellSort");
  while (gap > 0) {
    for (let i = 0; i < len - gap; i++) {
      let currentIndex = i;
      let gapIndex = i + gap;

      while (currentIndex >= 0) {
        if (sortArray[currentIndex] > sortArray[gapIndex]) {
          [sortArray[currentIndex], sortArray[gapIndex]] = [
            sortArray[gapIndex],
            sortArray[currentIndex],
          ];
        }
        gapIndex = currentIndex;
        currentIndex -= gap;
      }
    }
    // 间隔变小 每次循环完
    gap = Math.floor(gap / 2);
  }
  console.timeEnd("shellSort");
  return sortArray;
};

let arr = [78, 43, 35, 2, 3, 66, 89, 43, 23, 1, 89];

console.log(shellSort(arr));
