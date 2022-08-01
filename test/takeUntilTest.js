const takeUntil = require("../takeUntil");
const assert = require("chai").assert;

describe("#takeUntil", () => {
  it("Returns [ 1, 2, 5 ] for [1, 2, 5, 7, 2, -1, 2, 4, 5] when x > 5 ", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const callbackFunction = (x) => x > 5;
    assert.deepEqual(takeUntil(data1, callbackFunction), [1, 2, 5]);
  });
});
