const findCharacters = (string) => {
  const result = {};
  for (let i = 0; i < string.length; i += 1) {
    if (result[string[i]]) {
      result[string[i]] += 1;
    } else {
      result[string[i]] = 1;
    }
  }
  return result;
}

const permutationWithDups = (charCount) => {

  if (Object.keys(charCount).length === 1) {
    let resultStr = '';
    const character = Object.keys(charCount)[0];
    for (let i = 0; i < charCount[character]; i += 1) {
      resultStr += character;
    }
    return [resultStr];
  }

  const characters = Object.keys(charCount);
  const permutationsArray = [];
  for (let i = 0; i < characters.length; i += 1) {
    const modifiedCharCount = Object.assign({}, charCount);
    modifiedCharCount[characters[i]] -= 1;
    if (modifiedCharCount[characters[i]] === 0) {
      delete modifiedCharCount[characters[i]];
    }
    const permutations = permutationWithDups(modifiedCharCount);
    for (let j = 0; j < permutations.length; j += 1) {
      permutationsArray.push(characters[i] + permutations[j]);
    }
  }

  return permutationsArray;

  // the idea is to invoke permutationWithDups on charCounts where each unique character has one less count
  
}

const getPermutations = (string) => {
  const characters = findCharacters(string);
  return permutationWithDups(characters);
}
