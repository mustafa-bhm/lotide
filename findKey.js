const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 🔴 🔴 Assertion Faild: ${actual} !==  ${expected}`);
  }
};

///  the function
const findKey = function (obj, callback) {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

///Test data
const TestObj = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};

console.log(
  "test====",
  findKey(TestObj, (x) => x.stars === 2)
); // => "noma"

assertEqual(
  findKey(TestObj, (x) => x.stars === 2),
  "noma"
); /// => should pass
