const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // change code below this line
  //console.log(JSON.stringify(action))
  if (action.type == "LOGIN") {
    return {
      login: true
    }
  } else {
    return defaultState;
  }
  // change code above this line
};

const store = Redux.createStore(reducer);
//console.log(JSON.stringify(store))
const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};