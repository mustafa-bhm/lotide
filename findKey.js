const assertEqual = require("./assertEqual");

///  the function
const findKey = function (obj, callback) {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

module.exports = findKey;
