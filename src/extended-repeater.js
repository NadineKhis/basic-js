const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = "+",
    addition,
    additionRepeatTimes = 1,
    additionSeparator = "|"
  } = options;

  let result = "";

  for (let i = 0; i < repeatTimes; i++) {
    result += str;

    if (addition !== undefined) {
      for (let j = 0; j < additionRepeatTimes; j++) {
        result += addition;
        j < additionRepeatTimes - 1 ? (result += additionSeparator) : null;
      }
    }

    i < repeatTimes - 1 ? (result += separator) : null;
  }

  return result;
};
  