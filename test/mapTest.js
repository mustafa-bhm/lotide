const map = require("../map");
const assert = require("chai").assert;
describe("# map", () => {
  it("Returns [ 'g', 'c', 't', 'm', 't' ] for ['ground', 'control', 'to', 'major', 'tom']", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const callbackFunction = (word) => word[0];
    assert.deepEqual(map(words, callbackFunction), ["g", "c", "t", "m", "t"]);
  });
});
