const selectionSort = (array) => {
  for (let insertionIndex = 0; insertionIndex < array.length - 1; insertionIndex += 1) {
    let minValue = array[insertionIndex];
    let minValueIndexPt = 0;
    for (let minValueIndex = insertionIndex; minValueIndex < array.length; minValueIndex += 1) {
      if (array[minValueIndex] < minValue) {
        minValue = array[minValueIndex];
        minValueIndexPt = minValueIndex;
      }
    }

    if (minValue !== array[insertionIndex]) {
      const temp = array[insertionIndex];
      array[insertionIndex] = minValue;
      array[minValueIndexPt] = temp;
    }
  }

  return array;
}
