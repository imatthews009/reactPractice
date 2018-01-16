import React, { Component } from 'react';
import './App.css';
// give person uppercase name, can be anything but should be the const
import Person from './Person/Person.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react App</h1>
        <Person />
      </div>
      // code above is processed like the code below
      // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'))
    );
  } 
}

export default App;
