function binarySearch(array, target) {
  return binarySearchhelper(array, target, 0, array.length - 1);
}

function binarySearchhelper(array, target, left, right) {
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const match = array[middle];
    if (match === target) return middle;
    if (target > middle) left = middle + 1;
    else right = middle - 1;
  }
  return -1;
}

console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 2));
