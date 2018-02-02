const multiply = (num1, num2, currentResult = 0) => {
  if (num2 ==== 0) {
    return currentResult;
  }

  return multiply(num1, num2 - 1, currentResult + num1);
}
