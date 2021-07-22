const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length === keys2.length) {
    for (let item of keys1) {
      if (object1[item] !== object2[item]) {
        return false;
      }
    } return true; 
  } else {
    return false;
  }
};

const assertObjectsEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅assertion passed! ${actual} === ${expected}`)
  } else {
    console.log(`❌Assertion failed! ${actual} !== ${expected}`)
  }
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba), true); 

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc), false);