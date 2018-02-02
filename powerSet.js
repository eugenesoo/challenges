const powerSet = (array) => {
  if (array.length === 1) {
    return array;
  }
  const lastElement = array[array.length - 1].toString();
  const currentSet = [];

  const prevSet = powerSet(array.slice(0, array.length - 1));
  for (let i = 0; i < prevSet.length; i += 1) {
    currentSet.push(prevSet[i]).toString();
    currentSet.push(prevSet[i] + lastElement);
  }

  return currentSet;
}
