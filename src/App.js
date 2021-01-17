import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: '???', age: 0 },
      { name: '???', age: 1000 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');

    // Do not mutate state directly
    // this.state.persons[0].name = 'deosn't work';

    this.setState({
      persons: [
        { name: newName, age: 0 },
        { name: 'Nina', age: 1000 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, this is a new React app!</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Kris')}>Reveal Names</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Kristoff')} >
          Hobbies: Unknown</Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Kristoffer')} >
          Hobbies: Sleeping </Person>
      </div>
    );

    // JSX is syntactic sugar that will compile into vanilla JavaScript
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'},'Hello, this is a new React app!'))
  }
}

export default App;