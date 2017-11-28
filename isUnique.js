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
