const assertArraysEqual = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    // return false;
    return console.log(`🔴 🔴 🔴 Assertion Faild: ${arr1} !==  ${arr2}`);
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        // return false;
        return console.log(`🔴 🔴 🔴 Assertion Faild: ${arr1} !==  ${arr2}`);
      }
    }
    // return true;
    return console.log(`✅ ✅ ✅ Assertion Passed: ${arr1} ===  ${arr2}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, "3"]);
