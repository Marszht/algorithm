const { euclideanAlgorithmRecursive } = require("../euclidean-algorithm/euclideanAlgorithm");

console.log(euclideanAlgorithmRecursive);

/**
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const leastCommonMultiple = (a, b) => {
  // 需要考虑一下边界情况 a b 中有一个为 0 的时候 返回 0
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / euclideanAlgorithmRecursive(a, b);
};

console.log(leastCommonMultiple(3, 4));

module.exports = {
  leastCommonMultiple,
};
