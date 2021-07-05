/**
 * 阶乘 n! 所有小于 等于  n 的整数的积
 * @param {*} n
 * @return {number}
 */
const factorial = (n) => {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
};

// 用递归实现
const factorialRecursive = (n) => {
  return n > 1 ? n * factorialRecursive(n-1): 1;
};

console.log(factorial(5));
console.log(factorialRecursive(5));
