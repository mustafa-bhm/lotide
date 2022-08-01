const letterPositions = require("../letterPositions");
const assert = require("chai").assert;

describe("#letterPositions", () => {
  it("Returns an object of letters postion when passing in a string of words", () => {
    assert.deepEqual(letterPositions("hello world"), {
      h: [0],
      e: [1],
      l: [2, 3, 9],
      o: [4, 7],
      w: [6],
      r: [8],
      d: [10],
    });
  });
});
