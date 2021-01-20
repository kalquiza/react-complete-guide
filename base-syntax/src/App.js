import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'z57uhk', name: '???', age: 0 },
      { id: 'jr5xkn', name: '???', age: 1000 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 0 },
        { name: 'Nina', age: 1000 }
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    // Update state immutably by copying the state
    // use splice() or the spread operator with ES6
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
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
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
              />
            )
          })}
          {/* <Person>
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, 'Kristoff')}
            changed={this.nameChangedHandler} >
            Hobbies: Unknown</Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Kristoffer')} >
            Hobbies: Sleeping </Person> */}
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