// 斐波那契数列 (0)，1，1，2，3，5，8.。。

/**
 * 先创建一个斐波那契数列
 * @param {number} n
 * @returns {[]}
 */
const createFibonacci = (n) => {
  let fibSequence = [1];
  let currentValue = 1;
  let previousValue = 0;
  if (n === 1) {
    return fibSequence;
  }
  while (n - 1) {
    currentValue += previousValue;
    previousValue = currentValue - previousValue;

    fibSequence.push(currentValue);
    n--;
  }
  return fibSequence;
};

console.log(createFibonacci(5));

/**
 * 计算斐波那契数列 中某一项
 * @param {*} n
 * @return {number}
 */
const fibonacciNth = (n) => {
  let currentValue = 1;
  let previousValue = 0;
  if (n === 1) return currentValue;
  while (n - 1) {
    currentValue += previousValue;
    previousValue = currentValue - previousValue;
    n--;
  }
  return currentValue;
};
console.log(fibonacciNth(3));

/**
 * 使用闭合函数的形式来求解斐波那契数 中的某一项？
 * 一个固定的公式 没有必要细究
 * @param {*} position : ;
 */
const fibonacciClosedForm = (position) => {
  const toMaxValuePosition = 75;

  if (position < 1 || position > toMaxValuePosition) {
    throw new Error(`position 不能低于 1 或者 大于${toMaxValuePosition}`);
  }

  // 这个公式可以通过高代 或者等比 去算 
  const sqrt5 = Math.sqrt(5);
  const phi = (1 + sqrt5) / 2;
  return Math.floor((phi ** position) / sqrt5 + 0.5);
};

console.log(fibonacciClosedForm(6));