const words = ["ground", "control", "to", "major", "tom"];
const names = ["Stephanie Grant", "ALma May", "Wittington Wit"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);
const results2 = map(names, name => name.split(" ")[0]);   //getting first names only
console.log(results2);
