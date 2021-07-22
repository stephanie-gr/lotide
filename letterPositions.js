const letterPositions = function(sentence) {
  const results = {};
  let counter = 0;
  for (let char of sentence) {
    if (char !== " ") {
      if (!results[char]) {
        results[char] = [counter];
      } else {
        results[char].push(counter);
      }
    } counter++
  } return results;
}

console.log(letterPositions('hey whats up'));

/*const assertArraysEqual = function(array1, array2) {
  if (array1.length === array2.length) {
    let checkTrue = true;
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        continue;
      } else {
        checkTrue = false;
        break;
      } 
    } if (checkTrue) {
      console.log(`✅assertion passed! ${array1} === ${array2}`);
    } else if (!checkTrue) {
      console.log(`❌assertion failed! ${array1} !== ${array2}`);
    }
  } else {
    console.log(`❌assertion failed! ${array1} !== ${array2}`);
  }  
}

assertArraysEqual(letterPositions("hello").e, [1]);
*/