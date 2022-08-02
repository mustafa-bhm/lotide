const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");

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

module.exports = assertObjectsEqual;
