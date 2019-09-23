function translatePigLatin(str) {
  let testStr = /[aeiouAEIOU]/;
  let newStr = '';
  if (str[0].match(testStr)) {
    newStr = str + 'way';
    console.log(newStr);
  } else if (str.match(testStr) === null) {
    newStr = str + 'ay'
    console.log(newStr)
  } else {
    let howMany = str.indexOf(str.match(testStr)[0])
    newStr = str.substr(howMany) + str.substr(0,howMany) + "ay";
  }
  console.log(newStr)
  return newStr;
}

translatePigLatin("consonant");