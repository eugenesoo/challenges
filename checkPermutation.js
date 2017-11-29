//brute force
const getPermutations = (str) => {
  if (str.length === 1) {
    return [str];
  }
  
  const permutations = new Set();
  const prevResult = getPermutations(str.slice(0, str.length - 1));

  for (let i = 0; i < prevResult.length; i += 1) {
    for (let j = 0; j < prevResult[i].length; j += 1) {
      let newPermutation = prevResult[i].slice(0, j) + str[str.length - 1] + prevResult[i].slice(j, prevResult[i].length);
      permutations.add(newPermutation);
    }
  }

  return Array.from(permutations);
}

const checkPermutationBad = (strA, strB) => {
  // get all possible combinations of first string;
  const strAPermutations = getPermutations(strA);
  // loop through strB, and check to see if there is a match
  for (let i = 0; i < strAPermutations.length; i += 1) {
    if (strB === strAPermutations[i]) {
      return true;
    }
  }
  return false;
}

//optimised
const checkPermutations = (strA, strB) => {
  // loop through strA and store all characters in an object
  const strAChars = {};
  for (let i = 0; i < strA.length; i += 1) {
    strAChars[strA[i]] = true;
  }
  // loop through strB,
  for (let i = 0; i < strB.length; i += 1) {
    if (strAChars[strB[i]]) {
      strAChars[strB[i]] = false;
    } else {
      return false;
    }
  }

  return true;
  //  if the character can be found in strA,
  //  check the next X characters (based on the length of strA - 1) 
  //  store current pointer;
  //  store isvalidpermutation is true;
  //  while current point is < current pointer + legnth of strA - 1 || isvalidpermutation is false,
  //  if the character at current pointer cannot be found in the object, change is valid permutation to false;
  //
  //  at the end of the while loop, if isvalidpermutation is true, returnt rue
  //  else continue loop through strB
}
