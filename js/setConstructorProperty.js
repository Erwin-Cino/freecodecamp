function Dog(name) {
  this.name = name; 
}

// Modify the code below this line
Dog.prototype = {
  constructor: Dog,  
  numLegs: 2, 
  eat: function(lol) {
    console.log(lol); 
  }, 
  describe: function() {
    console.log("My name is " + this.name); 
  }
};
console.log(Dog.prototype.eat('nom nom nom'));