import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, this is a new React app!</h1>
        <p>This is really working!</p>
        <Person name="???" age="???">Hobbies: Unknown</Person>
        <Person name="Nina" age="1,000">Hobbies: Sleeping </Person>
      </div>
    );

    // JSX is syntactic sugar that will compile into vanilla JavaScript
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'},'Hello, this is a new React app!'))
  }
}

export default App;
