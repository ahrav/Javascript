function translatePigLatin(str) {
    const vowels = ["a","e","i","o","u"];
    if (vowels.includes(str[0])){
        return str + "way";
    }
    else{
        for (let i = 0; i < str.length; i++){
            if (!vowels.includes(str[i])){
                const letter = str[i];
                const newStr = str.slice(0,i) + str.slice(i+1,str.length)
                return newStr + letter + "ay"
            }
        }
    }
  }
  
  console.log(translatePigLatin("california"));