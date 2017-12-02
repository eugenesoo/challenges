const isPalindrome = (str) => {
  let firstIndex = 0;
  let lastIndex = str.length - 1;
  while (firstIndex <= lastIndex) {
    if (str[firstIndex].toLowerCase() !== str[lastIndex].toLowerCase()) {
      return false;
    }
    firstIndex += 1;
    lastIndex -= 1;
  }
  return true;
}

const isPalindromePerm = (str) => {
  // pattern is that if str has odd chars
  // must have 1 char with odd count, rest of chars must have even count
  // if str has even chars
  // chars must have even count
  let oddCount = 0;
  let evenCount = 0;
  let charCount = 0;
  const charObj = {};

  for (let i = 0; i < str.length; i += 1) {
    let currentChar = str[i].toLowerCase();
    if (!charObj[currentChar] && currentChar !== ' ') {
      charObj[currentChar] = 1;
      oddCount += 1;
    } else if (charObj[currentChar]){
      charObj[currentChar] += 1;
      charCount += 1;
      if (charObj[currentChar] & 1) {
        oddCount += 1;
        evenCount -= 1;
      } else {
        oddCount -= 1;
        evenCount += 1;
      }
    }
  }

  if (charCount & 1) {
    if (oddCount !== 1) {
      return false;
    }
    return true;
  } else {
    if (oddCount !== 0) {
      return false;
    }
    return true;
  }
}
