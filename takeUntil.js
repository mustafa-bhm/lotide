const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2) === false) {
    return console.log(`🛑 🛑 🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  } else {
    return console.log(`✅ ✅ ✅ Assertion Passed: ${arr1} === ${arr2}`);
  }
};

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

/// Test data

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);
assertArraysEqual(["I've", "been", "to", "Hollywood"], results2); /// => should pass
assertArraysEqual([1, 2, 5, 7, 2], results1); /// => should pass
