/**
 * 
 * @param {number} originalA 
 * @param {number} originalB 
 * @return {number}
 */
const euclideanAlgorithms = (originalA, originalB) => {

  // 如果是负数，则都转换为 正数
  let a = Math.abs(originalA);
  let b = Math.abs(originalB);

  while(a && b && b !== a) {
    [a, b] = a > b ? [a-b, b] : [a, b-a];
  }

  return a || b;
}

console.log(euclideanAlgorithms(55, 15))


/**
 * 递归写法
 * @param {number} originalA 
 * @param {number} originalB 
 */
const euclideanAlgorithmRecursive = (originalA, originalB) => {
  let a = Math.abs(originalA);
  let b = Math.abs(originalB);

  return (b === 0) ? a : euclideanAlgorithmRecursive(b, a % b);
}

console.log(euclideanAlgorithmRecursive(55, 15))