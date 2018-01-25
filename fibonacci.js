const fibonnaciRecursion = (n) => {
  if (n < 2) {
    return n;
  }
  return fibonnaciRecursion(n - 1) + fibonnaciRecursion(n - 2);
}

const fibonacciDynamic = (n) => {
  const fibonacciAns = {
    0: 0,
    1: 1,
  };

  const fibonacciCalc = (n) => {
    if (fibonacciAns[n] !== undefined) {
      return fibonacciAns[n];
    }

    fibonacciAns[n] = fibonacciCalc(n - 1) + fibonacciCalc (n - 2);
    return fibonacciAns[n];
  }

  return fibonacciCalc(n);
};

