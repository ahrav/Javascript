function sumAll(arr) {
    const incArr = arr.sort((a,b)=>{
        return a - b
    })
    const newArr = []
    for (let i = incArr[0]; i <= incArr[1]; i++){
        newArr.push(i);
    }
    return newArr.reduce((total, amount) => total+=amount)
  }
  
  console.log(sumAll([5, 10]));