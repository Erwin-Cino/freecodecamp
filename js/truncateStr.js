function truncateString(str, num) {
  // Clear out that junk in your trunk
  let result = "";
  str.length > num ? result = str.substring(0,num) + "..." : result = str;
  return result;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);