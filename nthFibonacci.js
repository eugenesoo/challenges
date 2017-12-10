const nthFibonacciRecursive = (int) => {
  if (int === 0) {
    return 0;
  }
  if (int === 1) {
    return 1;
  }
  return nthFibonacciRecursive(int - 1) + nthFibonacciRecursive(int - 2);
}

const nthFibonacciIterative = (int) => {
  if (int === 0) {
    return 0;
  }
  if (int === 1) {
    return 1;
  }
  let n = 2;
  let currentResult = 1;
  let prevResult = 0;
  let temp;
  while (n <= int) {
    temp = prevResult;
    prevResult = currentResult;
    currentResult += temp;
    n++;
  }
  return currentResult;
}

