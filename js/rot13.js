function rot13(str) { // LBH QVQ VG!
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let cipher = "NOPQRSTUVWXYZABCDEFGHIJKLM";
  let result = '';
  result = str.split("").map(x => {
      //console.log(alphabet.indexOf(x))
      if (alphabet.indexOf(x) > -1) {
          //console.log(cipher.charAt(alphabet.indexOf(x)))
          return cipher[alphabet.indexOf(x)]
      } else {
          return x
      }
  }).join('');
  console.log(result);
  return result;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
