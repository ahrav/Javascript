function destroyer(arr) {
    const newArr = arguments[0]
    const args = [].slice.call(arguments)
    const newArgs = args.slice(1)
    return newArr.filter(item => {
        if (!newArgs.includes(item)){
            return item
        }
    })
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));