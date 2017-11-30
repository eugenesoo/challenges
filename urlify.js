const urlify = (str) => {
  const strLength = str.length;
  let currentStrIndex = 0;
  let currentIndex = 0;
  const strArray = [];

  while (currentIndex <= strLength) {
    if (str[currentStrIndex] === ' ') {
      strArray.push('%20');
      currentIndex += 2;
      currentStrIndex += 1;
    } else {
      strArray.push(str[currentStrIndex]);
      currentIndex += 1;
      currentStrIndex += 1;
    }
  }
  // create an array to store string;
  return strArray.join(''); 
  // put each item in string
  // return array.
}
