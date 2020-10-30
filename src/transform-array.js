const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!arr) return
  if (!Array.isArray(arr)) throw new Error('THROWN')
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '--discard-prev' && arr[i] !== '--double-prev' && arr[i] !== '--double-next' && arr[i] !== '--discard-next') {
      newArr.push(arr[i]);
    } else if (arr[i] === '--discard-next') {
      i++;
    } else if (arr[i] === '--discard-prev' && arr[i - 2] !== '--discard-next') {
      newArr.pop();
    } else if (arr[i] === '--double-next' && i < arr.length - 1) {
      newArr.push(arr[i + 1]);
    } else if (arr[i] === '--double-prev' && i > 0) {
      if (arr[i - 2] !== '--discard-next') {
        newArr.push(arr[i - 1]);
      }
    }
  }
  return newArr
};
