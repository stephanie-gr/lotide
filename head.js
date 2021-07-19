const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion passed: ${actual} === ${expected}.`);
  } else {
    console.log(`❌❌❌Assertion failed: ${actual} !== ${expected}.`);
  }
};

const head = function(array) {
  let firstElement = array.shift();
  return firstElement;
};

assertEqual(head([5]), 5);
assertEqual(head([]), "Hello");
assertEqual(head([5,6,7]), 57);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), 10);