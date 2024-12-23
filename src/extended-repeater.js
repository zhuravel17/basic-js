const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const repeatTimes = Object.hasOwn(options, "repeatTimes") ? options.repeatTimes : 1;
  const separator = Object.hasOwn(options, "separator") ? options.separator : '+';
  let addition = '';
  if (Object.hasOwn(options, "addition")) {
    let add = options.addition;
    if (typeof add === "string") {
      addition = add;
    } 
    else {
      addition = String(add);
    }
  }
  const additionRepeatTimes = Object.hasOwn(options, "additionRepeatTimes") ? options.additionRepeatTimes : 1;
  const additionSeparator = Object.hasOwn(options, "additionSeparator") ? options.additionSeparator : '|';

  let addStr = ''
  if (addition !== '') {
    addStr = new Array(additionRepeatTimes)
      .fill(addition)
      .join(additionSeparator)
  }
  let res = new Array(repeatTimes)
    .fill(str + addStr)
    .join(separator);
  return res; 
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
