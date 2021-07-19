const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion passed: ${actual} === ${expected}.`);
  } else {
    console.log(`❌❌❌Assertion failed: ${actual} !== ${expected}.`);
  }
};

const tail = function(array) {
  let tailArray = array.slice(1, array.length);
  return tailArray;
};

console.log(tail([1, 2, 3, 4, 5]));

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!