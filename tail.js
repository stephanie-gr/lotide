const tail = function(array) {
  let tailArray = [];
  tailArray = array.slice(1, array.length);
  return tailArray;
};

module.exports = tail;