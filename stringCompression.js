const stringCompression = (str) => {
  const charHash = {};
  let compressedStr = '';
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
