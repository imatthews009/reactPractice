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
  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    // DON'T DO THIS this.state.persons[0].name = 'Iaaan';
    this.setState({
      persons: [
        {name: newName, age: 24},
        {name: 'Bob', age: 20},
        {name: 'Olivia', age: 22},
      ] 
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age:24},
        {name: 'Bob', age: 20},
        {name: 'Olivia', age: 22},
      ]
    })
  }
  

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a react App</h1>
        {/* uppercase C in onClick unlike normal JS */}
        {/* if you add () at the end of onclick function it executes the function immediately. So do not add () */}
        <button 
          style={style}
          onClick={() => this.switchNameHandler('BOOOOO')}>Switch Name
        </button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          changed={this.nameChangeHandler}
        />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[0].age}
          // passing the function that changes the state to the person function in person.js
          click={this.switchNameHandler.bind(this, 'Ian!!!!')}>My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[0].age}
        />
      </div>
      // code above is processed like the code below
      // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'))
    );
  } 
}

export default App;
