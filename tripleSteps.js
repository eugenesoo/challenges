const tripleSteps = (n) => {
  let numOfWays = 0;

  const stepCounter = (totalStepsLeft = n) => {
    for (let steps = 1; steps <= 3; steps += 1) {
      if (totalStepsLeft - steps === 0) {
        numOfWays += 1;
      } else if (totalStepsLeft - steps > 0) {
        stepCounter(totalStepsLeft - steps);
      }
    }
  }

  stepCounter();

  return numOfWays;
}


const tripleStepsRecurse = (n) => {

  if (n < 0) {
    return 0;
  }

  if (n === 0) {
    return 1;
  }

  return tripleStepsRecurse(n - 3) + tripleStepsRecurse(n - 2) + tripleStepsRecurse(n - 1);
}

const tripleStepsMemoized = (n) => {
  const memoized = {
    0: 1
  }

  const recursive = (n) => {
    if (n < 0) {
      return 0;
    }
    
    if (memoized[n] !== undefined) {
      return memoized[n];
    }
    
    memoized[n] = recursive(n - 1) + recursive(n - 2) + recursive(n - 3);

    return memoized[n];
  }

  return recursive(n);
}
