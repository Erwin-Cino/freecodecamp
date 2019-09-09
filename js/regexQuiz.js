let username = "JACK";
let userCheck = /[A-Za-z0-9_][^0-9]/gi; // Change this line
let result = userCheck.test(username);
let matchResult = username.match(userCheck);
console.log(matchResult);
console.log(result);