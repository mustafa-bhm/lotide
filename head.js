const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 🔴 🔴 Assertion Faild: ${actual} !==  ${expected}`);
  }
};

const head = function (arr) {
  let firstElm = arr[0];
  return firstElm;
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head([8]), 8);
assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
