const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (arr.length === 0) {
    return arr;
  }
  
  let res = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[0] === '--discard-prev' || arr[0] === '--double-prev') {
      continue;
    }
    if (arr[i] === '--discard-prev' && arr[i-1] === res[res.length - 1]) {
      res.pop();
    }
    if (arr[i] === '--discard-next') {
      i += 2;
    }
    if (arr[i] === '--double-prev' && arr[i-1] === res[res.length - 1]) {
      res.push(arr[i - 1]);
      i++;
    }
    if (arr[i] === '--double-next') {
      res.push(arr[i + 1]);
    }
    if (!(arr[i] === '--discard-prev' || arr[i] === '--double-prev' || arr[i] === '--double-next' || arr[i] === '--discard-next')) {
      res.push(arr[i]);
    }
  }
  if (!(arr[arr.length - 1] === '--discard-next' || arr[arr.length - 1] === '--double-next')) {
    res.push(arr[arr.length - 1]);
  }
  return res;
}

module.exports = {
  transform
};
