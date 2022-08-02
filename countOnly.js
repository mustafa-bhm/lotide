const assertEqual = require("./assertEqual");

const countOnly = function (allitems, itemsTocount) {
  let result = {};
  for (const item of allitems) {
    if (itemsTocount[item]) {
      if (result[item]) {
        result[item] += 1;
      } else {
        result[item] = 1;
      }
    }
  }

  return result;
};

module.exports = countOnly;
