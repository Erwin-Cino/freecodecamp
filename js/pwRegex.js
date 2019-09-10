let sampleWord = "astronaut";
let pwRegex = /(?=\w{3,4})(?=\D\d{1,2})/; // Change this line
let result = pwRegex.test(sampleWord);
let matchResult = sampleWord.match(pwRegex);

//Use lookaheadsin the pwRegexto match passwords that are greater than 5 characters long and have two consecutive digits.