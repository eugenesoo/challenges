const robotPaths = (rows, columns) => {
  if (rows < 0 || columns < 0) {
    return 0;
  }

  if (rows === 0 && columns >= 0) {
    return 1;
  }

  if (rows >= 0 && columns === 0) {
    return 1;
  }

  return robotPaths(rows - 1, columns) + robotPaths(rows, columns - 1);
}

const robotPathsMemoized = (rows, columns) => {
  const memoized = {
    00: 1,
  };

  const pathTraversal = (rows, columns) => {
    if (rows < 0 || columns < 0) {
      return 0;
    }

    if (rows === 0 && columns >= 0) {
      return 1;
    }

    if (rows >= 0 && columns === 0) {
      return 1;
    }

    if (memoized[`${rows}${columns}`] !== undefined) {
      return memoized[`${rows}${columns}`]; 
    }

    memoized[`${rows}${columns}`] = pathTraversal(rows - 1, columns) + pathTraversal(rows, columns - 1);
    return memoized[`${rows}${columns}`]; 
  }

  return pathTraversal(rows, columns); 
}

const robotPathsTraditional = (rows, columns) => {
  let numOfPaths = 0;

  const pathTraversal = (currentRow = 0, currentCol = 0) => {
    if (currentRow === rows && currentCol === columns) {
      numOfPaths += 1;
      return;
    }
    if (currentRow + 1 <= rows) {
      pathTraversal(currentRow + 1, currentCol);
    }

    if (currentCol + 1 <= columns) {
      pathTraversal(currentRow, currentCol + 1);
    }
  }

  pathTraversal();

  return numOfPaths;
}
// to reach 5, 5
// either move right from 4, 5
// or move down from 5, 4
//
// number of ways to reach (5, 5) = number of ways to reach (4, 5) + number of ways to reach (5, 4);
// number of ways to reach (x, y) = number of ways to reach (x - 1, y) + number of ways to reach (x, y - 1);
//
//
// number of ways to reach (0, 1) = number of ways to reach (-1, 0) + number of ways to reach (0, 0);
