const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 🔴 🔴 Assertion Faild: ${actual} !==  ${expected}`);
  }
};

/// count letters function
const countLetters = function (str) {
  let result = {};
  for (const letters of str) {
    if (result[letters]) {
      result[letters] += 1;
    } else if (letters !== " ") {
      result[letters] = 1;
    }
  }
  return result;
};

/// test data

console.log(countLetters("lighthouse in the house"));
//// should return
// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }
