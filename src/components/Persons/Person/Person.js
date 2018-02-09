import React, { Component }from 'react'
import classes from './Person.css'
// import Radium from 'radium'

// props pull the attributes assigned in the App.js code
class Person extends Component {
  render () {
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        {/* children includes any elements between opening and closing tag of component */}
        <input type='text' onChange={this.props.changed} value={this.props.name } />
      </div>
    )
  }
}


export default Person;