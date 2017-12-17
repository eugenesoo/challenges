const createMatrixHolder = (m, n) => {
  
}
const zeroMatrix = (matrix) => {
  // create holder to indicate row/column status
  const row = [];
  const column = [];
  for (let i = 0; i < matrix.length; i += 1) {
    row[i] = 1;
  }
  for (let i = 0; i < matrix[0].length; i += 1) {
    column[i] = 1;
  }

  // do double inner loop to determine row/cols that should be zeros
  for (let rowIndex = 0; rowIndex <= row; rowIndex += 1) {
    if (row[rowIndex]) {
      for (let colIndex = 0; colIndex <= column; colIndex += 1) {
        if (column[colIndex]) {
          if (matrix[rowIndex][colIndex] === 0) {
            row[rowIndex] = 0;
            col[colIndex] = 0;
          }
        }
      }
    }
  }

  // loop to change all rows and columns to zero
  for (let rowIndex = 0; rowIndex <= row; rowIndex += 1) {
    if (!row[rowIndex]) {
      for (let colIndex = 0; colIndex <= column; colIndex += 1) {
        matrix[rowIndex][colIndex] = 0;
      }
    }
    
  }
}
