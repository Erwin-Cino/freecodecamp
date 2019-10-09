const action = {
  type: 'LOGIN'
}
// Define an action creator here:

const actionCreator = () => {
    console.log(JSON.stringify(action))
    return action
}

actionCreator();