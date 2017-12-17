const commonCharacter = (str1, str2) => {
  const hash = {};
  let str = '';
  for (let i = 0; i < str2.length; i += 1) {
    hash[str2[i]] = true; 
  }
  for (let i = 0; i < str1.length; i += 1) {
    if (hash[str1[i]]) {
      str += str1[i];
      hash[str[i]] = false;
    }
  }
  return str;
}
