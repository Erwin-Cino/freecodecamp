// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function add (arr,bookName) {
  let pushBookList = [];
  arr.map(x => {
    pushBookList.push(x);
  })
  pushBookList.push(bookName);
  return pushBookList;
  // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove (arr,bookName) {
  let popBookList = [];
  let position;
  let beforeSplice;
  let afterSplice;
  arr.map(y => {
    popBookList.push(y);
  })
  if (arr.indexOf(bookName) >= 0) {
    position = arr.indexOf(bookName);
    beforeSplice = popBookList.splice(0,position);
    afterSplice = popBookList.slice(position, popBookList.length)
    return beforeSplice.concat(afterSplice);
    console.log(afterSplice);
  }
    return popBookList;
    
    // Add your code above this line
}

var newBookList = add(bookList, 'A Brief History of Time');
//console.log(newBookList);

var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');

console.log(newerBookList);
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);