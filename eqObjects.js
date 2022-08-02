const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

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
module.exports = eqObjects;
