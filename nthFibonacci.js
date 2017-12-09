const nthFibonacciRecursive = (int) => {
  if (int === 0) {
    return 0;
  }
  if (int === 1) {
    return 1;
  }
  return nthFibonacciRecursive(int - 1) + nthFibonacciRecursive(int - 2);
}
