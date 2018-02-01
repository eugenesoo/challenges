const fibonacciDynamic = (n) => {
  const memoize = {
    0: 0,
    1: 1,
  };
  
  const fibonacciInner = (n) => {
    if (memoize[n] !== undefined) {
      return memoize[n];
    } else {
      memoize[n] = fibonacciInner(n - 1) + fibonacciInner(n - 2);
      return memoize[n];
    }
  }
  
  return fibonacciInner(n);
}




const fibonacciBottomUp = (n) => {
  let n2Ans = 0;
  let n1Ans = 1;
  
  // iterate n - 2 times
  for (let i = 2; i <= n; i += 1) {
    const oldN1Ans = n1Ans;
    n1Ans += n2Ans;
    n2Ans = oldN1Ans;
  }
  
  return n1Ans;
}
