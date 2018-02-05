const paintFill = (colIndex, rowIndex, colourToReplace, colourOfChoice) => {
  // check if current colour at colIndex, rowIndex is same as colourToReplace
  // if yes, replace colour
  // paintFill(colIndex + 1, rowIndex, colourToReplace, colourOfChoice);
  // paintFill(colIndex, rowIndex + 1, colourToReplace, colourOfChoice);
}

const paintFillMemoize = (colIndex, rowIndex, picture, colourToReplace, colourOfChoice) => {
  const traversedPixel = {};

  const traversal = (currentColIndex, currentRowIndex) => {
    traversedPixel[`${currentRowIndex}${currentColIndex}`] = true;
    if (picture[currentRowIndex][currentColIndex] === colourToReplace) {
      picture[currentRowIndex][currentColIndex] = colourOfChoice;
      if (!traversedPixel[`${currentRowIndex}${currentColIndex + 1}`]) {
        traversal(currentRowIndex, currentColIndex + 1);
      }

      if (!traversedPixel[`${currentRowIndex + 1}${currentColIndex}`]) {
        traversal(currentRowIndex + 1, currentColIndex);
      }
    }
  }

  traversal(colIndex, rowIndex);
}
