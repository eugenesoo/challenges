// store vowels, not really necessary but keeps code cleaner
const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };

// vowel function
const vowelDoubler = (array) => {
  // check length of doubled array
  let lastIndex = array.length - 1;
  for (let i = 0; i < array.length; i += 1) {
    if (vowels[array[i]]) {
      lastIndex += 1;
    }   
  }
  // store 1 pointer to current index
  let currentIndex = array.length - 1;
  // store 1 pointer to point to current index to insert
  let currentInsertIndex = lastIndex;
  // loop from back of array to front of array
  while (currentIndex > 0) {
    // set character in insertion index to current index
    array[currentInsertIndex] = array[currentIndex];
    // shift insertion index by 1
    currentInsertIndex -= 1;
    // if current element is a vowel
    if (vowels[array[currentIndex]]) {
      // set te character in insertion index to current index again
      array[currentInsertIndex] = array[currentIndex];
      // shift insertion index by 1 again
      currentInsertIndex -= 1;
    }
    // shift current index by 1
    currentIndex -= 1;
  }
  return array;
}
