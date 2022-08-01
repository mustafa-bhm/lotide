const countOnly = require("../countOnly");
const assert = require("chai").assert;

describe("#countOnly", () => {
  it("Returns { Fang: 2, Jason: 1 } for ['Karl' 'Salima' 'Agouhanna' 'Fang' 'Kavith' 'Jason' 'Salima' 'Fang' 'Joe']", () => {
    const itemsToCount = {
      Jason: true,
      Karima: true,
      Fang: true,
      Agouhanna: false,
    };
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe",
    ];
    assert.deepEqual(countOnly(firstNames, itemsToCount), {
      Fang: 2,
      Jason: 1,
    });
  });
});
