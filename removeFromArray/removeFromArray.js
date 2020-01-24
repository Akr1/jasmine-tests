const removeFromArray = function (arrayToModify, ...morearguments) {
  for (let i = 0; i <= morearguments.length - 1; i++) {
    for (let j = 0; j <= arrayToModify.length - 1; j++) {
      if (morearguments[i] == arrayToModify[j]) {
        arrayToModify.splice(j, 1);
      }
    }
  }
  return arrayToModify;
}

module.exports = removeFromArray
