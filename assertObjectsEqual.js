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

const eqObjects = function (object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);

  ///check if there is the same number of keys
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  /// check if values are equal
  for (let Key of obj1Keys) {
    if (object1[Key] !== object2[Key] && !Array.isArray(object1[Key])) {
      return false;
    }
    if (Array.isArray(object1[Key]) && Array.isArray(object2[Key])) {
      if (eqArrays(object1[Key], object2[Key])) {
        return true;
      } else {
        return false;
      }
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    return console.log(
      `✅ ✅ ✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    return console.log(
      `🛑 🛑 🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

/// test data
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const bcd = { b: "3", a: "1" };
assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, bcd);
