function palindrome(str) {
  // Good luck!
  let regex = /[\W_]/g
  str = str.toLowerCase().replace(regex,'');
  console.log(str);
  let len = str.length - 1;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - i]) {
      return false;
    } 
  }
  return true;
}



palindrome("A man, a plan, a canal. Panama");