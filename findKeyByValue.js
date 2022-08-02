const assertEqual = require("./assertEqual");

/// function

const findKeyByValue = function (obj, value) {
  const objKey = Object.keys(obj);
  const val = Object.values(obj);
  for (let i = 0; i < val.length; i++) {
    if (val[i] === value) {
      return objKey[i];
    }
  }
};

module.exports = findKeyByValue;
