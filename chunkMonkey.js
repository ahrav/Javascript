function chunkArrayInGroups(arr, size) {
    let new_arr = [];
    let i = 0;
    while (i < arr.length){
        let min_arr = arr.slice(i,size+i);
        new_arr.push(min_arr);
        i += size;
    }
    return new_arr;
  }
  
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));