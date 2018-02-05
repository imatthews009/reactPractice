import React, { Component } from 'react';
import classes from './App.css';
// give person uppercase name, can be anything but should be the const
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


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

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler} 
            changed={this.nameChangeHandler}/>
        </div>
      );
    }

    

    return (
      <div className={classes.App}>
        <Cockpit 
          showPersons = {this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  } 
}

export default App;
