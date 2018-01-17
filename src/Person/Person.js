import React from 'react'
import './Person.css'

// props pull the attributes assigned in the App.js code
const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      {/* children includes any elements between opening and closing tag of component */}
      <input type='text' onChange={props.changed} value={props.name } />
    </div>
)
};

export default person;