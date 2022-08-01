const findKeyByValue = require("../findKeyByValue");
const assert = require("chai").assert;
describe("#findKeyByValue", () => {
  it("Returns the key when searching by value ", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
    };
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
});
