class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    }
  }
  render() {
    const usersOnline = this.state.users.filter(onUsers => {
      return onUsers.online;
    }); // change code here
    console.log(JSON.stringify(usersOnline))
    const renderOnline = usersOnline.map(renderOn => {
      console.log(JSON.stringify(renderOn.username))
      return (
        <li key={usersOnline.indexOf(renderOn)}>{renderOn.username}</li>
      )
    }); // change code here
    return (
       <div>
         <h1>Current Online Users:</h1>
         <ul>
           {renderOnline}
         </ul>
       </div>
    );
  }
};