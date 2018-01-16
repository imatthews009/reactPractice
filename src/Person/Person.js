import React from 'react'

// props pull the attributes assigned in the App.js code
const person = (props) => {
  return <p>I'm a {props.name} and I am {props.age} years old!</p>
};

export default person;