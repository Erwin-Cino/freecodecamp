function telephoneCheck(str) {
  // Good luck!
  let regexF = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  console.log(regexF.test(str))
  return regexF.test(str);
}

telephoneCheck("5555555555");
telephoneCheck("555-555-5555");
telephoneCheck("1 555)555-5555")
