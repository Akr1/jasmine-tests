const sumAll = function (firstNumber, secondNumber) {
  let sumNums = 0;
  let smallNum = firstNumber;
  let biggerNum = secondNumber;
  if (typeof smallNum == "number" && typeof biggerNum == "number"
    && smallNum >= 0 && biggerNum >= 0) {
    if (smallNum > biggerNum) {
      smallNum = secondNumber;
      biggerNum = firstNumber;
    }
    for (let i = smallNum; i <= biggerNum; i++) {
      sumNums += i;
    }
  } else {
    return 'ERROR';
  }

  return sumNums;
}

module.exports = sumAll
