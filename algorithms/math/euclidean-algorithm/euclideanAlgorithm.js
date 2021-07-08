

const euclideanAlgorithms = (originalA, originalB) => {

  // 如果是负数，则都转换为 正数
  let a = Math.abs(originalA);
  let b = Math.abs(originalB);

  while(a && b && b !== a) {
    [a, b] = a > b ? [a-b, b] : [a, b-a];
  }

  return a || b;
}