const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let number = 0
  for (let i of matrix) {
    for (let j of i) {
      if (j === '^^') {
        number += 1
      }
    }
  }
  return number
};
