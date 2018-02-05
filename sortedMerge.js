const sortedMerge = (arrayA, arrayB) => {
  let arrayAIndex = arrayA.length - arrayB.length;
  let arrayBIndex = arrayB.length - 1;
  let currentIndex = arrayA.length;

  while (currentIndex >= 0) {
    if (arrayAIndex < 0 || arrayA[arrayAIndex] < arrayB[arrayBIndex]) {
      arrayA[currentIndex] = arrayB[arrayBIndex];
      arrayBIndex -= 1;
    } else {
      arrayA[currentIndex] = arrayA[arrayAIndex];
      arrayAIndex -= 1;
    }
    currentIndex -= 1;
  }

  return arrayA;
}
