function Dog(name) {
  this.name = name; 
}

Dog.prototype = {
  // Add your code below this line
  numLegs: 4,
  eat: function() {
    console.log('I am eating');
  },
  describe: function() {
    console.log('It\'s good');
  }
};
