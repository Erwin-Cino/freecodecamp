let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Add your code below this line
let glideMixin = function(obj) {
    obj.glide = function() {
        console.log("This machine can glide");
    }
}

glideMixin(bird);
glideMixin(boat);

console.log(bird.glide());
console.log(boat.glide());




