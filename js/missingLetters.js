function fearNotLetter(str) {
  let i = str.charCodeAt(0);
  console.log(i);
  for (let j = 0; j < str.length; i++,j++) {
    console.log(str.charAt(j));
    console.log(String.fromCharCode(i));
    if (String.fromCharCode(i) !== str.charAt(j)) {
      console.log(String.fromCharCode(i));
      return String.fromCharCode(i);
    }
  }
  return undefined;
}

fearNotLetter("abce");