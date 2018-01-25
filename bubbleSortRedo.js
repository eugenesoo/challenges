const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

const bubbleSortOptimised = (array) => {
  for (let i = 0; i < array.length - 1; i += 1) {
    let hasSwapped = false;
    for (let j = 0; j < array.length - 1 - i; j += 1) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        hasSwapped = true;
      }
    }
    if (!hasSwapped) {
      return array;
    }
  }
  return array;
}
