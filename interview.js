let input = "1,2,3,4,5,6,7";


const getSum = input => {
    let nums = input.split(",").map(Number).reduce((currentVal, total) => {
        return currentVal+=total
    });
    console.log(nums)
}

getSum(input)