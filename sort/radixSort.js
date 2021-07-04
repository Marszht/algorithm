// 基数排序，也叫桶排序

// 常量定义桶 的 数量
const NUMBER_OF_POSSIBLE_DIGITS = 10;
const BASE_CHAR_CODE = 97;
const ENGLISH_ALPHABET_LENGTH = 26; // 26 个桶

// 该排序算法还兼容了字符的排序，按asscll 排序 a = 97 b = 98;
const radixSort = (arr) => {
  function sort(originArray) {
    // 排序前我们假定待排序数组元素都是同一个类型
    const isArayOfNumber = isArrayOfNumbers(originArray);

    let sortArray = [...originArray];
    // 计算数组中 最大元素的长度，如果是字符串，直接计算长度，其实就计算要循环多少次
    const numPasses = determineNumPasses(sortArray);
    // console.log(numPasses);

    for (let currentIndex = 0; currentIndex < numPasses; currentIndex++) {
      // 一轮排序后的二维数组 [[], [], ...]
      // FIXME:先暂时处理数值类型的
      const buckets = isArayOfNumber
        ? placeElementsInNumberBuckets(sortArray, currentIndex)
        : placeElementsInCharacterBuckets(sortArray, currentIndex, numPasses);
      // 二维数组扁平化，进行下一轮循环
      // 可以有很多处理方式 这里是每个元素都是数组所以处理比较简单，而且只有一层
      sortArray = buckets.reduce((acc, val) => {
        return [...acc, ...val];
      }, []);
    }
    return sortArray;
  }

  /**
   * 这个方法就是找到该元素属于哪个桶
   * @param {*[]} array
   * @param {*number} index 其实就是表示 个位 十位  百位
   * @return {[]}
   */
  function placeElementsInNumberBuckets(array, index) {
    const modded = 10 ** (index + 1);
    const divide = 10 ** index;

    const buckets = createBuckets(NUMBER_OF_POSSIBLE_DIGITS);

    array.forEach((element) => {
      if (element < divide) {
        // 0 的情况
        buckets[0].push(element);
      } else {
        const currentDigit = Math.floor((element % modded) / divide); // 求出某个数值中 某位的余数 尾数, 找到在哪个桶
        buckets[currentDigit].push(element);
      }
    });
    return buckets;
  }

  function placeElementsInCharacterBuckets(array, index, numPasses) {
    const buckets = createBuckets(ENGLISH_ALPHABET_LENGTH);

    array.forEach((element) => {
      const currentBucket = getChartCodeOfElementAtIndex(
        element,
        index,
        numPasses
      );
      buckets[currentBucket].push(element);
    });
    return buckets;
  }

  function getChartCodeOfElementAtIndex(element, index, numPasses) {
    if (numPasses - index > element.length) {
      // ???
      return ENGLISH_ALPHABET_LENGTH - 1;
    }

    // 如果是当前访问 位置 > 当前单词 ，说明当前单词已经遍历完了
    const charPos = index > element.length - 1 ? 0 : element.length - index - 1; // 计算当前 元素在当前单词的位置。
    // console.log(element);
    // console.log(charPos);
    // console.log(element.toLowerCase().charCodeAt(charPos));
    return element.toLowerCase().charCodeAt(charPos) - BASE_CHAR_CODE; // 以a 作为基准 去比较。
  }

  /**
   * 新建空的桶
   * @param {number} numBuckets
   * @return {*[]}
   */
  function createBuckets(numBuckets) {
    return Array(numBuckets)
      .fill(null)
      .map(() => []);
  }

  function determineNumPasses(array) {
    return getLengthOfLongestElement(array);
  }

  /**
   *  。
   * @param {*[]} array
   * @return {number}
   */
  function getLengthOfLongestElement(array) {
    if (isArrayOfNumbers(array)) {
      return Math.floor(Math.log10(Math.max(...array))) + 1;
    }

    // 如果是字符串， 就计算字符串的长度
    return array.reduce((acc, val) => {
      return val.length > acc ? val.length : acc;
    }, -Infinity);
  }

  /**
   * @param {*[]} array
   * @returns {boolean}
   */
  function isArrayOfNumbers(array) {
    // 只对数组第一个元素判断
    return isNumber(array[0]);
  }

  /**
   * @param {*} num
   * @returns {boolean}
   */
  function isNumber(num) {
    return Number.isInteger(num);
  }

  return sort(arr);
};

let arr = [78, 43, 35, 2, 3, 66, 89, 43, 23, 1];
let string = ["abcdef", "lemon", "lemoa"];
let stringArr = ["lemon", "lemoa"];
console.log(radixSort(arr));
console.log(radixSort(string));
console.log(radixSort(stringArr));
