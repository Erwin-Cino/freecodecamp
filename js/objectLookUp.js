let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // change code below this line
 
 //obj.hasOwnProperty(name);
 let a = obj.hasOwnProperty('Alan');
 let b = obj.hasOwnProperty('Jeff');
 let c = obj.hasOwnProperty('Sarah');
 let d = obj.hasOwnProperty('Ryan');
 return a,b,c,d;
  // change code above this line
}

console.log(isEveryoneHere(users));