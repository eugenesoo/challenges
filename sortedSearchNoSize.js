const sortedSearch = (array, element) => {
  // calculate array size i
  let arraySize = 2;
  let currentValue = array[arraySize];

  while (currentValue !== -1) {
    arraySize = Math.pow(arraySize, 2);
    currentValue = array[arraySize];
  }

  let startIndex = 0;
  let endIndex = arraySize;
  let midIndex = Math.floor((startIndex + endIndex) / 2);

  while (startIndex <= endIndex) {
    if (array[midIndex] === -1) {
      midIndex -= 1;
    } else if (array[midIndex] === element) {
      return midIndex;
    } else if (array[midIndex] > element) {
      startIndex = midIndex + 1;
      midIndex = Math.floor((startIndex + endIndex) / 2);
    } else {
      endIndex = midIndex - 1;
      midIndex = Math.floor((startIndex + endIndex) / 2);
    }
  }

  return -1;
}
