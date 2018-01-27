import React, { Component } from 'react';
import './App.css';
// give person uppercase name, can be anything but should be the const
import Person from './Person/Person.js';


class App extends Component {
  // state only available when extending components. Not in fucntion components
  state = {
    persons: [
      {id: 'alsdkfj', name: 'Ian', age: 25},
      {id: 'kdjfkd', name: 'Bob', age: 20},
      {id: 'kdjkfj', name: 'Olivia', age: 22},
    ],
    showPersons: false,
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

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // using spread operator so we do not mutate the state. created new object
    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value; 
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});

    // this.setState({
    //   persons: [
    //     {name: event.target.value, age:24},
    //     {name: 'Bob', age: 20},
    //     {name: 'Olivia', age: 22},
    //   ]
    // })
  }
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  // slice() will copy the array
  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
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
            return <Person
                    click={() => this.deletePersonHandler(index)} 
                    name={person.name} 
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      );
      style.backgroundColor = 'red';
    }

    let classes = [];
    if (this.state.persons.length <=2) {
      classes.push('red'); //classes red
    } 
    if (this.state.persons.length <=1) {
      classes.push('bold'); //classes red and bold
    }

    return (
      <div className="App">
        <h1 className={classes.join(' ')}>Hi, I'm a react App</h1>
        {/* uppercase C in onClick unlike normal JS */}
        {/* if you add () at the end of onclick function it executes the function immediately. So do not add () */}
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Show People
        </button>
        {persons}
      </div>
      // code above is processed like the code below
      // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'))
    );
  } 
}

export default App;
