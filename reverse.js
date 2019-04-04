function reverseString(str) {
    let new_str = "";
    for (let i = str.length -1; i >= 0; i--){
      new_str.push(str[i])
    }
    console.log(new_str)
    return new_str;
  }
  
  reverseString("hello");