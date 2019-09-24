function pairElement(str) {
  let newStr = [];
  let pusher = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 'G') {
      pusher.push(str[i]);
      pusher.push("C");
      newStr.push(pusher);
      pusher = [];
    } else if (str[i] == 'C') {
      pusher.push(str[i]);
      pusher.push("G");
      newStr.push(pusher);
      pusher = [];
    } else if (str[i] == 'A') {
      pusher.push(str[i]);
      pusher.push("T");
      newStr.push(pusher);
      pusher = [];
    } else if (str[i] == 'T') {
      pusher.push(str[i]);
      pusher.push("A");
      newStr.push(pusher);
      pusher = [];
    }
  }
  console.log(newStr);
  return newStr;
}

pairElement("ATCGA");