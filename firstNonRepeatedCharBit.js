const firstNonRepeatedChar = (str) => {
  const strHash = {};
  let result;
  for (let i = 0; i < str.length; i += 1) {
    if (strHash[str[i]]) {
      if (str[i] === result) {
        result = undefined;
      }
    } else {
      strHash[str[i]] = true;
      if (!result) {
        result = str[i];
      }
    }
  }
  return result;
}


const firstNonRepeatedCharBit = (str) => {
  let bitVector = 0;
  let charBit;
  let resultBit;
  for (let i = 0; i < str.length; i += 1) {
    charBit = 1 << (str[i].charCodeAt(0) - 65);
    if (bitVector & charBit) {
      if (resultBit === charBit) {
        resultBit = undefined;
      }
    } else {
      bitVector += charBit;
      if (!resultBit) {
        resultBit = charBit;
      }
    }
  }
  return String.fromCharCode(resultBit.toString(2).length - 1 + 65);
}
