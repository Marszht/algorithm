/**
 *
 * @param {array} arr
 * @return  {array}
 */
const shuffle = (arr) => {
  let shuffleArr = [...arr];
  for (let i = (arr.length - 1); i > 0; i -= 1 ) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffleArr[i], shuffleArr[randomIndex]] = [shuffleArr[randomIndex], shuffleArr[i]];
  }
  return shuffleArr;
};
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(shuffle(arr));
