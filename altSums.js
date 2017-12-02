const altSums = (intStr) => {
  let sum = 0;
  for (let i = 0; i < intStr.length; i += 1) {
    if (intStr[i] === intStr[i + 1]) {
      sum += parseInt(intStr[i], 10);
    } else if (i === intStr.length - 1 && intStr[0] === intStr[i]) {
      sum += parseInt(intStr[i], 10);
    }
  }
  return sum;
}

const altSumsHalf = (intStr) => {
  let sum = 0;
  let intLength = intStr.length;
  for (let i = 0; i < intLength / 2; i += 1) {
    if (intStr[i] === intStr[i + intLength / 2]) {
      sum += parseInt(intStr[i], 10);
    } else if (i === intStr.length - 1 && intStr[0] === intStr[i]) {
      sum += parseInt(intStr[i], 10);
    }
  }
  return sum * 2;
}
