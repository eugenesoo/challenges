const rotateMatrix = (matrix) => {
  let store;
  let length;
  let startPoint = 0;
  let endPoint = matrix.length - 1;

  while (startPoint < endPoint) {
    length = endPoint;
    for (let i = startPoint; i < endPoint; i += 1) {
      store = matrix[startPoint][i];
      matrix[startPoint][i] = matrix[length][startPoint];
      matrix[length][startPoint] = matrix[endPoint][length];
      matrix[endPoint][length] = matrix[i][endPoint];
      matrix[i][endPoint] = store;

      length -= 1;
    }
    startPoint += 1;
    endPoint -= 1;
  }
  
  debugger;
  return matrix;
}

generateMatrix = (n) => {
  const result = [];
  for (let i = 0; i < n; i += 1) {
    let innerArr = [];
    for (let j = 0; j < n; j += 1) {
      innerArr.push(j);
    }
    result.push(innerArr);
  }
  return result;
}

rotateMatrix(generateMatrix(8));
