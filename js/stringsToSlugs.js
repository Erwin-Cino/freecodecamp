// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
  console.log(title.split(/\W/))
  
  let newStr = title.split(/\W/).filter(x => {
    return x !== '';
  }).join("-").toLowerCase();
  
  return newStr;
  //console.log(globalTitle)
  //return newTitle;
  
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"