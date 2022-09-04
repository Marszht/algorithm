/**
 * m^n m 的 n 次方根
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
const fastPowering = (m, n) => {
  return n === 0 ? 1 : fastPowering(m, n - 1) * m;
};

const fastPoweringOptimization = (m, n) => {
  if (n === 0 ) return 1;
  if (n === 1) {
    return m;
  }
  if (n % 2 === 0) {
    
    return fastPoweringOptimization(m, n/2) * fastPoweringOptimization(m, n/2);
  } else {
    return fastPoweringOptimization(m, (n+1)/2) * fastPoweringOptimization(m, (n+1)/2) / m;
  };
};

console.log(fastPowering(3, 12));
console.log(fastPoweringOptimization(3, 12));
