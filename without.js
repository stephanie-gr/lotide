const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion passed: ${actual} === ${expected}.`);
  } else {
    console.log(`❌❌❌Assertion failed: ${actual} !== ${expected}.`);
  }
}

const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    let checkTrue = true;
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        continue;
      } else {
        checkTrue = false;
        break;
      } 
    } return checkTrue;
  } else {
    return false;
  }  
}

const without = function(source, itemsToRemove) {
  let withoutArray = [];
  for (let i =0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      withoutArray.push(source[i]);
    }
  } return withoutArray;
}
