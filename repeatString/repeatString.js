const repeatString = function (wordToRepeat, numberOfRepetitions) {
  let output = '';
  if (numberOfRepetitions > 0) {
    for (let i = 0; i < numberOfRepetitions; i++) {
      output = output + wordToRepeat;
    }
    return output;
  } else if (numberOfRepetitions < 0) {
    return 'ERROR';
  } else {
    return output;
  }

}

module.exports = repeatString
