
const testIsPrimality = (num) => {
  console.time("first");
  if (num <= 1) return false;

  let currentValue = num;
  // 遍历可以只遍历到平方根
  while (num >= currentValue) {
    // console.log(currentValue);
    if (currentValue === 1) return true;
    if (num % currentValue === 0 && currentValue !== num) {
      console.timeEnd("first");
      return false;
    }
    currentValue--;
  }
  return true;
};


const testIsPrimality2 = (num) => {
  console.time("second");
  if (num % 1 !== 0) return false; //  num 是否为整数
  if (num <= 1) return false; // 0, 1
  if (num <= 3) return true; // 2,3 质数
  if (num % 2 === 0) return false; // 偶数非质数

  let sqrt = Math.sqrt(num); // 遍历到平方根就行，
  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) {
      console.timeEnd("second");
      return false
    };
  }
  return true;
};

// console.log(testIsPrimality(1000002));
// console.log(testIsPrimality2(1000002));

/**
 * @param {number} n
 * @return {number}
 */
 var countPrimes = function(n) {
  let primes = [];
  
  function testIsPrime(value) {
      if (value <= 1) return false;
      if (value <= 3) return true;
      if (value%2 === 0) return false;
      
      let sqrt = Math.sqrt(value);
      for (let i = 3; i <= sqrt; i++) {
          if (value % i === 0) {
              return false
          }
      }
      
      return true;
      
  }
  
  for (let i = 0; i <= n; i++) {
      if (testIsPrime(i)) {
          primes.push(i)
      }
  }
  console.log(primes)
  return primes.length;
};

console.log(countPrimes(5000000))

