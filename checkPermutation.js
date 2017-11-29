//brute force
-> get every possible combination of the first string
-> check if it matches the second string

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
