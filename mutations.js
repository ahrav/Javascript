function mutation(arr) {
    let letters = [];
    let arg2 = arr[0];
    for (let i = 0; i < arg2.length; i++){
        letters.push(arg2[i].toLowerCase());
    }
    for (let i = 0; i < arr[1].length; i++){
        if (!(letters.includes(arr[1][i].toLowerCase()))){
            return false;
        }
    }
    return true;
  }
  
console.log(mutation(["hello", "Hello"]));