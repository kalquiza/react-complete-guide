import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users: [
      { username: '??????'},
      { username: 'XXXXX'}
    ]
  }

  usernameChangedHandler = (event) => {
    this.setState({
      users: [
        { username: event.target.value},
        { username: 'XXXXX'}
      ]
    })
  }

  render() {
    const style = {
      width: '60%',
      margin: '16px auto',
      padding: '16px'
    };

    return (
      <div className="App" style={style}>
        <UserInput
        username={this.state.users[0].username}
        changed={this.usernameChangedHandler}></UserInput>
        <UserOutput
        username={this.state.users[0].username}></UserOutput>
        <UserOutput
        username={this.state.users[1].username}></UserOutput>
      </div>
  );
  }
}

export default App;
