function repeatStringNumTimes(str, num) {
    let new_str = "";
    if (num == 0){
        return "";
    }
    else{
        for (let i = 0; i < num; i++){
            new_str += str;
        }
    }
    return new_str;
  }
  
  console.log(repeatStringNumTimes("abc", 3));

  // ES 6

  function repeatStringNumTimes(string, times) {
    //Step 1. If times is positive, return the repeated string
    if (times > 0) { // (3 > 0) => true
      return string.repeat(times); // return "abc".repeat(3); => return "abcabcabc";
    }
    
    //Step 2. Else if times is negative, return an empty string if true
    else {
      return "";
    }
  }
  
  repeatStringNumTimes("abc", 3);