const sparseSearch = (array, string) => {
  let startIndex = 0;
  let endIndex = array.length - 1;
  let midIndex = Math.floor((startIndex + endIndex) / 2);

  while (startIndex >= endIndex && midIndex >= 0) {
    if (array[midIndex] === '') {
      midIndex -= 1;
    } else if (array[midIndex] === string) {
      return midIndex;
    } else if (array[midIndex] > string) {
      startIndex = midIndex + 1;
      midIndex = Math.floor((startIndex + endIndex) / 2);
    } else {
      endIndex = midIndex - 1;
      midIndex = Math.floor((startIndex + endIndex) / 2);
    }
  }

  return -1;
}
