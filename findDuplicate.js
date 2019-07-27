const arr = [1,2,3,4,4,5,6]

const otherArr = []
const findDuplicate = arr => {
    for (let i = 0; i < arr.length; i++){
        if (!otherArr.includes(arr[i])){
            otherArr.push(arr[i]);
        }else{
            return arr[i];
        }
    }
}

console.log(findDuplicate(arr));

// if need to return array without duplicates

const seenInts = new Set();

const findDuplicate2 = arr => {
    for (let i = 0; i < arr.length; i++){
        if (seenInts.has(arr[i])){
            arr.splice(i);
        }else{
            seenInts.add(arr[i])
        }
    }
    return arr;
}

console.log(findDuplicate2(arr))