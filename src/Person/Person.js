import React from 'react'

// props pull the attributes assigned in the App.js code
const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      {/* children includes any elements between opening and closing tag of component */}
    </div>
)
};

export default person;