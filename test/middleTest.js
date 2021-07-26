// const assertArraysEqual = require('../assertArraysEqual');
// const middle = require('../middle');

// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]);
// assertArraysEqual(middle(["this", "will", "work"]), ['will']);
// assertArraysEqual(middle(["but", "will", "this", "one", "?"]), ['this']);

const assertArraysEqual = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assertArraysEqual(middle([1, 2, 3]), 2);
  });
  it("returns [] for ['5']", () => {
    assertArraysEqual(middle([]), []); 
  });
});