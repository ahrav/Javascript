function frankenSplice(arr1, arr2, n) {
    let new_arr = arr2.splice(0,n);
    for (let i = 0; i < arr1.length; i++){
        new_arr.push(arr1[i])
    }
    for (let i = 0; i < arr2.length; i++ ){
        new_arr.push(arr2[i]);
    }
    arr2 = new_arr;
    return arr2;
  }
  
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));

