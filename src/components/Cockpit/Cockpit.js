import React from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {
  let assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.red
  }

  if (props.persons.length <=2) {
    assignedClasses.push(classes.red); //classes red
  } 

  if (props.persons.length <=1) {
    assignedClasses.push(classes.bold) //classes red and bold
  }

  return (
    <div className={classes.Cockpit}>
      <h1 className={assignedClasses.join(' ')}>{props.appTitle}</h1>
      <button 
        clasName={btnClass}
        onClick={props.clicked}>Show People
      </button>
    </div> 
  )
}

export default cockpit