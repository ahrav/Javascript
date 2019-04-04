// function diffArray(arr1, arr2) {
//     const newArr = []
//     const arr1Set = new Set(arr1)
//     const arr2Set = new Set(arr2)
//     const unique1 = arr1Set - arr2Set
//     // const unique2 = a
//     console.log(unique1)
//     return newArr;
//   }
  
//   diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

  function diffArray(arr1, arr2) {
    const set1 = new Set(arr1.filter(x => !arr2.includes(x)))
    const set2 = new Set(arr2.filter(x => !arr1.includes(x)))
    const newArr = [...set1].concat([...set2])
    console.log(newArr)
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);