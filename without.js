const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return console.log(`🔴 🔴 🔴 Assertion Faild: ${arr1} !==  ${arr2}`);
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return console.log(`🔴 🔴 🔴 Assertion Faild: ${arr1} !==  ${arr2}`);
      }
    }
    return console.log(`✅ ✅ ✅ Assertion Passed: ${arr1} ===  ${arr2}`);
  }
};

const eqArrays = function(arr1, arr2) {
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

// a function to remove unwanted elements from an arry

const without = function(source, itemsToRemove) {
  for (let i = 0; i < itemsToRemove.length; i++) {
    if (source[i] === itemsToRemove[i]) {
      source.splice(i, 1);
    }
  }
  return source;
};

// TEST CODE
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

without([1, 2, 3], [1, 2]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]);
