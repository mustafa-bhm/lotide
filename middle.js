// Test /assertion function
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

/// Actual function

const middle = function (arr) {
  let result = [];
  let mid = arr[Math.floor(arr.length / 2)];
  // let midEven = arr[Math.floor(arr.length / 2) + 1];

  if (arr.length <= 2) {
    return result;
  }
  if (arr.length > 2 && arr.length % 2 === 0) {
    result.push(mid - 1);
    result.push(mid);
  }
  if (arr.length > 2 && arr.length % 2 !== 0) {
    result.push(mid);
  }
  return result;
};

/// Test code ///////

/// odd arrays
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
/// even arrays

middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
middle([1, 2, 3, 4, 5, 6, 7, 8]); // => [4, 5]
