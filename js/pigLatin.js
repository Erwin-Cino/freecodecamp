function translatePigLatin(str) {
  let newStr = str.split("");
  let counter = 1;
  let result = [];
  let letters = [];
  let firstC = ["a","y"];
  let secondC = ["w","a","y"];
  for (let i = 0; i < counter; i++) {
    if(!/[aeiouAEIOU]/.test(newStr[i]) && !/[aeiouAEIOU]/.test(newStr[counter])) {
        letters.push(newStr[i]);
        letters.push(newStr[counter]);
        newStr = newStr.slice(letters.length);
        newStr = newStr.concat(letters);
        result = newStr.concat(firstC);
        return result = result.join("");
        //console.log(newStr);
        counter++
    } else if (!/[aeiouAEIOU]/.test(newStr[i]) && /[aeiouAEIOU]/.test(newStr[counter])) {
        letters.push(newStr[i]);
        newStr = newStr.slice(letters.length);
        newStr = newStr.concat(letters);
        result = newStr.concat(firstC);
       return result = result.join("");
        console.log(newStr);
        console.log(letters);
    } else if (/[aeiouAEIOU]/.test(newStr[i]) && /[aeiouAEIOU]/.test(newStr[counter])) {
      newStr = newStr.concat(secondC);
      return result = newStr.join("");
    } else {
      newStr = newStr.concat(secondC);
      return result = newStr.join("");
    }
  }
}

translatePigLatin("glove");