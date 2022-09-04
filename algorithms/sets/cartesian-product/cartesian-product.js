
/**
 * @param {array} x 
 * @param {array} y 
 * @return {[]} 
 */
const cartesianProduct = (x, y) => {
  if (!x.length || !y.length) {
    return null;
  }
  let product = [];
  for(let i = 0; i < x.length; i++) {
    for (let j = 0; j < y.length; j++) {
      sets.push([x[i], y[j]]);
    }
  }
  return product;
}

console.log(cartesianProduct([1,2,3], ["a", "b", "c"]))