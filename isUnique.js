const isUnique = (string) => {
  const strObj = {};
  for (let i = 0; i < string.length; i += 1) {
    if (strObj[string[i]]) {
      return false;
    } else {
      strObj[string[i]] = true;
    }
  }
  return true;
}


//using bitwise

// assign lowercase characters a bit each
const charBit = {};

for (let i = 97; i < 123; i += 1) {
  // get alphabet
  const char = String.fromCharCode(i);
  const intBit = Math.pow(2, i - 97);
  charBit[char] = intBit;
}

const isUniqueBit = (string) => {
  let checker = 0;
  for (let i = 0; i < string.length; i += 1) {
    if ((checker & charBit[string[i]]) === 0) {
      checker = checker | charBit[string[i]];
    } else {
      return false;
    }
  }
  return true;
}
