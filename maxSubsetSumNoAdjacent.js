function maxSubsetSumNoAdjacent(array) {
  if (!array.length) return 0;
  let include = 0;
  let exclude = 0;

  for (let i of array) {
    let newExclude = exclude > include ? exclude : include;

    include = exclude + i;
    exclude = newExclude;
  }

  return exclude > include ? exclude : include;
}
