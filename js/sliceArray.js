function sliceArray(anim, beginSlice, endSlice) {
  // Add your code below this line
    let newArr = anim.slice(beginSlice,endSlice);
    console.log(newArr);
    return newArr;
  
  // Add your code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);