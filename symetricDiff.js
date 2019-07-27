function sym(...args) {
    let newArr = []
    for (let i = 0; i < args.length; i++){
        const newArgs = [...args]
        let arr1 = [].slice.call(newArgs[i]);
        console.log(arr1)
        let arr2 = [].slice.call(newArgs[1]);
        let uniqueOne = arr1.filter(o => arr2.indexOf(o) === -1);
        let uniqueTwo = arr2.filter(o => arr1.indexOf(o) === -1);
        newArr.concat(uniqueOne).concat(uniqueTwo);
    }
    return newArr;
    
  }
  
  console.log(sym([1, 2, 3], [5, 2, 1, 4]));