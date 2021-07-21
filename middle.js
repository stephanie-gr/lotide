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

const middle = function(array) {
  let middleArray = []
  if ((array.length === 1) || (array.length === 2)) {
    return middleArray;
  } else if (array.length % 2 === 0) {
      let half = array.length / 2
      console.log('half:', half);
      middleArray.push(array[half - 1]);
      middleArray.push(array[half]);
      return middleArray;

  } else if (array.length % 2 !== 0) {
      let half = (array.length - 1) / 2;
      middleArray.push(array[half]);
      return middleArray;
  }
}

console.log(middle([1, 2, 3, 4]))
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(middle(["this", "will", "work"]))
console.log(middle(["but", "will", "this", "one", "?"]))