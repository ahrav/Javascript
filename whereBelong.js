function getIndexToIns(arr, num) {
    arr.sort(function(a,b){
        return a -b;
    });
    if (arr.length == 0){
        return 0;
    }
    let i = 0;
    while ( i < arr.length){
        if (num <= arr[i]){
            return i;
        }
        else{
            i++;
            if (i == arr.length){
                return i;
            }
        }
    }
  }
  
console.log(getIndexToIns([2, 5, 10], 15));