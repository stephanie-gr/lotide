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
};


module.exports = eqArrays;


