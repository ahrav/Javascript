var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  return [].concat(arr).sort((a, b) => a - b);
}
console.log(nonMutatingSort(globalArray));

const sortMicroapps = microapps => {
  microapps.sort((a, b) => {
    if (a.preCachedAt && b.preCachedAt) {
      return new Date(b.preCachedAt) - new Date(a.preCachedAt);
    }
    return b.publishedAt - a.publishedAt;
  });
};
