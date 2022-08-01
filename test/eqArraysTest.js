const eqArrays = require("../eqArrays");
const assert = require("chai").assert;
const assertEqual = require("../assertEqual");

describe("#eqArrays", () => {
  it("Returns true for [1,2,3] vs [1,2,3]", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    assert.deepEqual(eqArrays(arr1, arr2), true);
  });
});
