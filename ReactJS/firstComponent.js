// change code below this line
const FirstReact = () => {
  return (
    <div>
      <h1>My First React Component!</h1>
    </div>
  )
}
class MyComponent extends React.Component {
  constructor(prop) {
    super(prop)
  }

  render () {
    return (
      <FirstReact />
    )
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'))