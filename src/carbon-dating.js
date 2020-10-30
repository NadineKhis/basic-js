const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; // переименуйте в INITIAL_ACTIVITY
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === 'string' && !isNaN(sampleActivity) && sampleActivity < 15 && sampleActivity > 0) {
     let t = (Math.log(MODERN_ACTIVITY) / sampleActivity) / (Math.log(2) / HALF_LIFE_PERIOD)
    if (t === Infinity) {
      return false
    }
     return Math.ceil(t)
  } else {
    return false
  }

};
