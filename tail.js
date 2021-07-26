const tail = function(array) {
  let tailArray = array.slice(1, array.length);
  return tailArray;
};

module.exports = tail;// original array should still have 3 elements!