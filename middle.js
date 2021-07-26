const eqArrays = require('./eqArrays');

const middle = function(array) {
  let middleArray = []
  if ((array.length === 1) || (array.length === 2)) {
    return middleArray;
  } else if (array.length % 2 === 0) {
      let half = array.length / 2
      middleArray.push(array[half - 1]);
      middleArray.push(array[half]);
      return middleArray;

  } else if (array.length % 2 !== 0) {
      let half = (array.length - 1) / 2;
      middleArray.push(array[half]);
      return middleArray;
  }
}

module.exports = middle;