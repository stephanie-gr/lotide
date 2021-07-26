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