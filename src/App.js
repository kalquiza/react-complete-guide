import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: '???', age: 0 },
      { name: '???', age: 1000 }
    ],
  });

  const [otherState, setOtherState] = useState({
    otherState: 'some other value'
  })

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Kris', age: 0 },
        { name: 'Nina', age: 1000 }
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hello, this is a new React app!</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Reveal Names</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>Hobbies: Unknown</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>Hobbies: Sleeping </Person>
    </div>
  );
}

export default app;