function threeNumbersum(array, targetSum) {
  const results = [];
  array.sort((a, b) => a - b);
  for (let i = 0; i <= array.length - 3; i++) {
    if (i === 0 || array[i] > array[i] - 1) {
      let start = i + 1;
      let end = array.length - 1;
      while (start < end) {
        if (array[i] + array[start] + array[end] === targetSum)
          results.push([array[i], array[start], array[end]]);

        if (array[i] + array[start] + array[end] < targetSum) {
          let current_start = start;
          while (array[start] === array[current_start] && start < end) {
            start++;
          }
        } else {
          let current_end = end;
          while (array[end] === array[current_end] && start < end) {
            end--;
          }
        }
      }
    }
  }
  return results;
}
