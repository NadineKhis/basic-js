const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    if(Array.isArray(arr)){
      arr.forEach(element => {
        if(element instanceof Array){
          depth = Math.max(this.calculateDepth(element),depth) ;
        }
      });
    }
    return depth + 1;
  }
};