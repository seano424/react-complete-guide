import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    toggleBtnRef.current.click();
  }, [])

  const assignedClasses = [];
  let btnText = "Turn me on"
  let btnClass = classes.Green;
  if (props.showPersons) {
    btnClass = classes.banana;
    btnText = "Turn me off"
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.banana);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a react app</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        {btnText}
      </button>
    </div>
  );
};

export default cockpit;
