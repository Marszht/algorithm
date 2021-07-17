
/**
 * 判断一个数是否为 2 的 次方根
 * @param {*} number 
 * @return {boolean}
 */
const isPowerOfTwo = (number) => {
  // 0 不是
  if (number === 0) return false;
  // 1 也是
  if (number === 1) return true;
  // 如果是奇数提前判断
  if (number % 2 !== 0) return false;

  let currentValue = number;

  // /2 之后的值
  while (currentValue >= 1) {
    currentValue = currentValue / 2;
    if (currentValue === 1) return true;
  }
  return false;
};

console.log(isPowerOfTwo(12));
