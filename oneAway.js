const oneAway = (strA, strB) => {
  let strAIndex = 0;
  let strBIndex = 0;
  let diffCount = 0;

  if (Math.abs(strA.length - strB.length) > 1) {
    return false;
  }

  while (strAIndex < strA.length || strBIndex < strB.length) {
    if (strA[strAIndex] === strB[strBIndex]) {
      strAIndex += 1;
      strBIndex += 1;
    } else {
      if (strA.length > strB.length) {
        strAIndex += 1;
        strBIndex += 2;
      } else if (strA.length < strB.length) {
        strAIndex += 2;
        strBIndex += 1;
      } else {
        strAIndex += 1;
        strBIndex += 1;
      }

      diffCount += 1;
      if (diffCount > 1) {
        return false;
      }
    }
  }

  return true;
}
