const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion passed: ${actual} === ${expected}.`);
  } else {
    console.log(`❌❌❌Assertion failed: ${actual} !== ${expected}.`);
  }
};

const findKeyByValue = function(objectToScan, valueToFind) {
  for (let key in objectToScan) {
    if (objectToScan[key] === valueToFind) {
      return objectToScan[key];
    }
  }
}


let object1 = {
  firstWord: "hey",
  secondWord: "you",
  thirdWord: "there",
}

let valueToFind = "hey";

console.log(assertEqual(findKeyByValue(object1, valueToFind), "hey"));

