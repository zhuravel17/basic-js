const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1] && i !== str.length) {
      ++count;
    } else {
      if (count) {
        count++;
        res += count;
        count = 0;
      }
      res += str[i];
    }
  }
  return res;
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
