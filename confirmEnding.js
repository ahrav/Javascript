function confirmEnding(str, target) {
    let ending = str.substring(str.length - target.length);
    return ending == target;
  }
  
  console.log(confirmEnding("Bastian", "n"));