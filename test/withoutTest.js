const without = require("../without");
const assert = require("chai").assert;

describe("#without", () => {
  it("Returns [2, 3] for [2, 3, 1]", () => {
    const nums = [2, 3, 1];
    const toRemove = [1];
    assert.deepEqual(without(nums, toRemove), [2, 3]);
  });
});
