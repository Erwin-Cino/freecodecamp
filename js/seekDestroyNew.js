function myReplace(str, before, after) {
  let regex = /[A-Z]/g;
  //let newAfter = after;
  let newStr = str.replace(before, function() {
      if (regex.test(before.charAt(0))) {
        return after.charAt(0).toUpperCase() + after.substr(1);
      } else {
        return after;
      }
  })
  console.log(newStr);
  return newStr;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");