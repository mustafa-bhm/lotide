const assertEqual = require("./assertEqual");

/// count letters function
const countLetters = function (str) {
  let result = {};
  for (const letters of str) {
    if (result[letters]) {
      result[letters] += 1;
    } else if (letters !== " ") {
      result[letters] = 1;
    }
  }
  return result;
};
module.exports = countLetters;
