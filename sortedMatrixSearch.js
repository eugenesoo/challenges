const sortedMatrixSearch = (matrix, element) => {
  for (let i = 0; i < matrix.length; i += 1) {
    const columnIndex = binarySearch(matrix[i], element);
    if (columnIndex >= 0) {
      return [i, columnIndex];
    }
  }
  return -1;
}


const binarySearch = (array, element) => {
  let startIndex = 0;
  let endIndex = array.length - 1;
  let midIndex = Math.floor((startIndex + endIndex) / 2);

  while (startIndex <= endIndex) {
    if (array[midIndex] === element) {
      return midIndex;
    } else if (array[midIndex] > element) {
      endIndex = midIndex - 1;
    } else {
      startIndex = midIndex + 1;
    }
    midIndex = Math.floor((startIndex + endIndex) / 2);
  }

  return -1;
}

const sortedMatrixSearchOptimised = (matrix, element) => {
  let row = 0;
  let col = matrix.length - 1;

  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === element) {
      return [row, col];
    } else if (matrix[row][col] > element) {
      col -= 1;
    } else {
      row -= 1;
    }
  }

  return -1;
}
