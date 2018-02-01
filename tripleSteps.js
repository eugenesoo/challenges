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
