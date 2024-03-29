const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:
const dispatch = store.dispatch(loginAction())
console.log(JSON.stringify(dispatch))
console.log(JSON.stringify(loginAction()))