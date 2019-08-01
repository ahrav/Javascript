function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let result = [];
  let idxOne = 0;
  let idxTwo = 0;
  let smallest = Infinity;
  let current = Infinity;

  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    numOne = arrayOne[idxOne];
    numTwo = arrayTwo[idxTwo];

    if (numOne < numTwo) {
      current = numTwo - numOne;
      idxOne++;
    } else if (numTwo < numOne) {
      current = numOne - numTwo;
      idxTwo++;
    } else return [numOne, numTwo];

    if (current < smallest) {
      smallest = current;
      result = [numOne, numTwo];
    }
  }
  return result;
}

console.log(
  smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17])
);
