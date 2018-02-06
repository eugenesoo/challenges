const sortValleyPeaks = (array) => {
  for (let i = 0; i < array.length; i += 2) {
    if (array[i] < array[i - 1] || array[i] < array[i + 1]) {
      let biggestIntIndex;
      if (array[i + 1] > array[i - 1]) {
        biggestIntIndex = i + 1;
      } else {
        biggestIntIndex = i - 1;
      }
      // swap mid with biggestIntIndex;
      const temp = array[i];
      array[i] = array[biggestIntIndex];
      array[biggestIntIndex] = temp;
    }
  }

  return array;
}
