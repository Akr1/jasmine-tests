const reverseString = function (wordToReverse) {
  let reversedWord = '';
  let i = wordToReverse.length - 1;
  for (i; i >= 0; i--) {
    reversedWord = reversedWord + wordToReverse.charAt(i);
  }
  return reversedWord;
}

module.exports = reverseString
