import React, { Component } from 'react';

import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { id: 'z57uhk', name: '???', age: 0 },
      { id: 'jr5xkn', name: '???', age: 1000 },
      { id: 'd94mds', name: '???', age: 10000 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // const person = Object.assign({}, this.state.persons[personIndex]);
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;
    
    this.setState({persons: persons});
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
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                />
              </ErrorBoundary>
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

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red' 'bold']
    }

    return (
        <div className={classes.App}>
          <h1>Hello, this is a new React app!</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button class={btnClass} onClick={this.togglePersonsHandler}>
            Reveal persons
          </button>
          {persons}
        </div>
    );

    // JSX is syntactic sugar that will compile into vanilla JavaScript
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'},'Hello, this is a new React app!'))
  }
}

export default App;