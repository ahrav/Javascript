// find missing number in ordered array from 1 to n
// If unordered sub sum of array from n(n+1)/2


const arr = [1,2,3,4,5,7,8]

function missingNum(){
    if (arr[0] != 1){
        return 1;
    }else{
        for (let i = 0; i < arr.length; i++){
            if (arr[i + 1] != arr[i] + 1){
                return arr[i] + 1
            }
        }
    }
}


console.log(missingNum(arr))