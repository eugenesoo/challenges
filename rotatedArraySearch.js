const rotatedArraySearch = (array, number) => {
  let startIndex = 0;
  let endIndex = array.length - 1;
  let midIndex = Math.floor((startIndex + endIndex) / 2);

  while (startIndex <= endIndex) {
    if (array[midIndex] === number) {
      return midIndex;
    } else if (array[startIndex] < array[midIndex]) {
      if (number >= array[startIndex] && number <= array[midIndex]) {
        endIndex = midIndex - 1;
      } else {
        startIndex = midIndex + 1;
      }
    } else {
      if (number <= array[endIndex] && number >= array[midIndex]) {
        startIndex = midIndex + 1;
      } else {
        endIndex = midIndex - 1;
      }
    }
    // if midIndex = number
    //   return midIndex;
    // check if left side of array is ordered (meaning startIndex < midIndex)
    //   check if number is bigger than startIndex && smaller than midIndex
    //      set endIndex to midIndex - 1;
    //      set midIndex to new midIndex;
    //   else
    //      set startIndex to midIndex + 1;
    //      set midIndex to new midIndex;
    // else 
    //   check if number is smaller than endIndex && bigger than midIndex
    //      set startIndex to midIndex + 1;
    //      set midIndex to new midIndex;
    //   else
    //      set endIndex to midIndex - 1;
    //      set midIndex to new midIndex;
    //      
    //
    //
    midIndex = Math.floor((startIndex + endIndex) / 2);
  }
  return -1;
 }
