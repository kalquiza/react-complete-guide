import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: '???', age: 0 },
      { name: '???', age: 1000 }
    ],
    otherState: 'some other value',
    showPersons: false
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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 0 },
        { name: 'Nina', age: 1000 }
      ]
    })
  }

  togglePersonsHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, 'Kristoff')}
            changed={this.nameChangedHandler} >
            Hobbies: Unknown</Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Kristoffer')} >
            Hobbies: Sleeping </Person>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello, this is a new React app!</h1>
        <p>This is really working!</p>
        <button 
          onClick={this.togglePersonsHandler}
          style={style}> Reveal persons
        </button>
        {persons}
      </div>
    );

    // JSX is syntactic sugar that will compile into vanilla JavaScript
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'},'Hello, this is a new React app!'))
  }
}

export default App;