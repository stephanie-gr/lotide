// const assertEqual = require('../assertEqual');
// const eqArrays = require('../eqArrays');

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays(["hey", "hi"], ["hey", "hi"]), true);

const assertEqual = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 3 for [1, 2, 3]", () => {
    assertEqual.strictEqual(tail([1, 2, 3]), 3);
  });
  it("returns '5' for ['5']", () => {
    assertEqual.strictEqual(tail(['5']), '5'); 
  });
});