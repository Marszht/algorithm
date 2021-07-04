// 质数检测，就是判断一个整数是否为质数
// 质数：只能被 1 和自身整除的正整数为质数

// 解题思路：找 1 - num 之间 是否 有 除 1 和 num 之外的数能够整除 num 就是遍历 查找、 
// 优化：遍历 优化 只需要遍历 平方根，然后一些边界条件 提交前判断

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

// 再优化一下， 遍历其实不用遍历到 num ，然后偶数 也可以剔除， 质数 只可能是奇数

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

console.log(testIsPrimality(1000002));
console.log(testIsPrimality2(1000002));
