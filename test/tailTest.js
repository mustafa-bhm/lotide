const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("Returns Lighthouse labs for [Hello Lighthouse Labs] ", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs",
    ]);
  });
});
