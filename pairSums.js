const A = [1,4,45,6,10,8]

function findPairs(arr,n){
    const s = new Set()
    const pairs = []

    for (let i = 0; i < arr.length; i++){
        const temp = n - arr[i]
        if (temp >= 0 && s.has(temp)){
            pairs.push([temp, arr[i]])
        }
        else{
            s.add(arr[i])
        }
    }
    return pairs
}

console.log(findPairs(A,16))