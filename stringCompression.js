const stringCompression = (str) => {
  const charHash = {};
  for (let i = 0; i < str.length; i += 1) {
    if (charHash[str[i]]) {
      charHash[str[i]] += 1;
    } else {
      charHash[str[i]] = 1;
    }
  }
  const compressedStr = Object.keys(charHash).reduce((str, char) => {
    str = str + char + charHash[char];
    return str;
  }, '');
  return compressedStr.length < str.length ? compressedStr : str;
}

const stringCompressionOptimised = (str) => {
  if (checkCompressedStrLength > str.length) {
    return str;
  }

  let compressedStr = '';
  let currentChar;
  let currentCharCount = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (!currentChar) {
      currentChar = str[i];
      currentCharCount = 1;
    } else if (str[i] === currentChar) {
      currentCharCount += 1;
    } else {
      compressedStr = compressedStr + currentChar + currentCharCount;
      currentChar = str[i];
      currentCharCount = 1;
    }
  }
  compressedStr = compressedStr + currentChar + currentCharCount;
  return compressedStr;
}

const checkCompressedStrLength = (str) => {
  let length = 0;
  let currentChar = str[0];
  for (let i = 1; i < str.length; i += 1) {
    if (str[i] !== currentChar) {
      length += 2;
      currentChar = str[i];
    }
  }
  return length + 2;
}
