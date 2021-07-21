const countLetters= function(sentence) {
  let counted = {};
  for (const letter of sentence) {
    if (letter === " ") {
      continue;
    } else if (counted[letter]) {
      counted[letter] += 1;
    } else {
      counted[letter] = 1;
    }
  }console.log(counted);
}


countLetters("hey there partner");