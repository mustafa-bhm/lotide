const findKey = require("../findKey");
const assert = require("chai").assert;

describe("#findkey", () => {
  it("Returns 'noma' for { 'Blue Hill': { stars: 1 }, Akaleri: { stars: 3 }, noma: { stars: 2 }, elBulli: { stars: 3 }, Ora: { stars: 2 }, Akelarre: { stars: 3 }, }; ", () => {
    const TestObj = {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    };
    assert.deepEqual(
      findKey(TestObj, (x) => x.stars === 2),
      "noma"
    );
  });
});
