function titleCase(str) {

let result = str.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1).split('').map(letter => letter.toLowerCase()).join('')).join(' ');

return result;

}

console.log(titleCase("I'm a little tea pot"));
titleCase("I'm a little tea pot");