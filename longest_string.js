function findLongestWordLength(str) {
    let new_str = str.split(" ");
    let count = 0;
    for (word in new_str){
      if (new_str[word].length > count){
        count = new_str[word].length;
      }
    }
    return count;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
  