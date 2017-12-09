const nthFibonacciRecursive = (int) => {
  if (int === 0) {
    return 0;
  }
  if (int === 1) {
    return 1;
  }
  return nthFibonacciRecursive(int - 1) + nthFibonacciRecursive(int - 2);
}

const nthfibonacciiterative = (int) => {
  if (int === 0) {
    return 0;
  }
  if (int === 1) {
    return 1;
  }
  let n = 2;
  let currentresult = 1;
  let prevresult = 0;
  let temp;
  while (n <= int) {
    temp = prevresult;
    prevresult = currentresult;
    currentresult += temp;
    n++;
  }
  return currentresult;
}

