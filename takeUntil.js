const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const takeUntil = function (array, callback) {
  let results = [];
  for (let value of array) {
    if (!callback(value)) {
      results.push(value);
    }
    if (callback(value)) {
      return results;
    }
  }
};
module.exports = takeUntil;
