import React, { Component } from 'react';
import './App.css';
// give person uppercase name, can be anything but should be the const
import Person from './Person/Person.js';

class App extends Component {
  // state only available when extending components. Not in fucntion components
  state = {
    persons: [
      {name: 'Ian', age: 25},
      {name: 'Bob', age: 20},
      {name: 'Olivia', age: 22},
    ]
  }
  // handler means handling event handler
  switchNameHandler = () => {
    // console.log('Was clicked');
    // DON'T DO THIS this.state.persons[0].name = 'Iaaan';
    this.setState({
      persons: [
        {name: 'Iaaaan', age: 24},
        {name: 'Bob', age: 20},
        {name: 'Olivia', age: 22},
      ] 
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react App</h1>
        {/* uppercase C in onClick unlike normal JS */}
        {/* if you add () at the end of onclick function it executes the function immediately. So do not add () */}
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[0].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[0].age}/>
      </div>
      // code above is processed like the code below
      // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'))
    );
  } 
}

export default App;
