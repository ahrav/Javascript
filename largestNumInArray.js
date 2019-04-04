function largestOfFour(arr) {
    let new_arr = []
    for (i = 0; i < arr.length; i++){
      let largestNum = 0;
      for (let j = 0; j < arr[i].length; j++){
        if (j == 0){
            largestNum = arr[i][j];
        }
        if (arr[i][j] > largestNum){
          largestNum = arr[i][j]
        }
      }
      new_arr.push(largestNum);
      largestNum = 0;
    }
    return new_arr;
  }
  
  console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));