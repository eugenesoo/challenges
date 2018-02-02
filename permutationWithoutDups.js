const permutationWithoutDups = (string) => {

  if (string.length === 1) {
    return [string];
  }
  
  const currentCharToInsert = string[string.length - 1];
  const prevResult = permutationWithoutDups(string.slice(0, string.length - 1));
  const currentResult = [];
  for (i = 0; i < prevResult.length; i += 1) {
    // for each previous permutation
    for (j = 0; j <= prevResult[i].length; j += 1) {
      // in each previous permutation
      let prevPermutation = prevResult[i];
      let currentPermutation = prevPermutation.slice(0,j) + currentCharToInsert + prevPermutation.slice(j);
      currentResult.push(currentPermutation);
    }
  }

  return currentResult;
}
