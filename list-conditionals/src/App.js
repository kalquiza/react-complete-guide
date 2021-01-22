import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Character from './Char/Char';

class App extends Component {
  state = {
    text: 'Hello!',
  };

  textChangedHandler = (event) => {
    this.setState({ text: event.target.value });
  }

  deleteCharacterHandler = (index) => {
    let newText = [...this.state.text];
    newText.splice(index, 1);
    this.setState({ text: newText.join('')});
  }

  render() {
    return (
      <div className="App">
        <input type="text" value={this.state.text} onChange={(event) => this.textChangedHandler(event)}></input>
        <p>{this.state.text.length}</p>
        <Validation textLength={this.state.text.length} />
        <div>
          {this.state.text.split('').map((character, index) => {
            return (
              <Character
              click={() => this.deleteCharacterHandler(index)}
              char={character}
              />
            )
          })}
          </div>
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=&gt; ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=&gt; CharComponent) and style it as an inline box (=&gt; display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
