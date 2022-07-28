const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 🔴 🔴 Assertion Faild: ${actual} !==  ${expected}`);
  }
};

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

/// Test data
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); /// => passed
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "drama"); /// => faild
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi"); /// => passed
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); /// => pass
