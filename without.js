const assertArraysEqual = function (arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    return console.log(`🔴 🔴 🔴 Assertion Faild: ${arr1} !==  ${arr2}`);
  } else {
    return console.log(`✅ ✅ ✅ Assertion Passed: ${arr1} ===  ${arr2}`);
  }
};

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

const without = function (source, itemsToRemove) {
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        source.splice(i, 1);
      }
    }
  }
  return source;
};

// TEST CODE
assertArraysEqual(without([2, 3, 1], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

without([1, 2, 3], [1, 2]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]);
assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), [
  "hello",
  "world",
]);
