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
        <p>Assignment Instructions</p>
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=&gt; the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=&gt; an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
      </div>
  );
  }
}

export default App;
