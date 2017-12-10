const bubbleSort = (array) => {
  let temp;
  array = array.slice();
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1) {
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
    if (temp === undefined) {
      return array;
    } else {
      temp = undefined;
    }
  }
  return array;
}
