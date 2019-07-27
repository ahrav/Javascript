//using sort

const arr = [1,23,4,7,89,-1,4,177,-67]

const findMaxAndMin = arr => {
    arr.sort((a,b) => a-b)
    const max = arr[arr.length-1]
    const min = arr[0]
    return max, min
}



//without sor



const maxAndMin = arr => {
    let max;
    let min;
    for (let i = 0; i < arr.length; i++){
        if (i === 0){
            if (arr[i] > arr[i+1]){
                max = arr[i]
                min = arr[i+1]
            }else{
                max = arr[i+1];
                min = arr[i]
            }
        }else{
            if (arr[i] < min){
                min = arr[i];
            } 
            else if (arr[i] > max){
                max = arr[i];
            }
        }
    }
    return 'max is ' + max + ' min is ' +min
}

console.log(maxAndMin(arr))