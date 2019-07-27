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
