const twoSum = (arr, sum) => {
  const comp = {};
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (comp[arr[i]] >= 0) {
      result.push([comp[arr[i]], i]);
    }
    comp[sum - arr[i]] = i;
  }
  return result;
};

console.log(twoSum([1, 3, 4, 5, 6, 8, 10, 11, 13], 14));

function twoNumberSum(array, targetSum) {
  let comp = new Set();
  array.forEach(num => {
    if (comp.has(targetSum - num))
      [num, targetSum - num].sort((a, b) => a - b);

    comp.add(num);
  });
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
