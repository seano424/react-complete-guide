import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import styled from "styled-components";


// style.backgroundColor = "#ef476f"; #06d6a0
const StyledButton = styled.button`
    background-color: ${props => props.alt ? "#06d6a0" : "#ef476f"};
    color: white;
    font: inherit;
    border: none;
    border-radius: 4px;
    padding: 8px;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 2px 10px #ccc;
    }
    &:focus {
      outline: none;
    }
  `
;

class App extends Component {
  state = {
    persons: [
      { id: 12345, name: "Sean", age: 31 },
      { id: 12346, name: "Manuel", age: 99 },
      { id: 12347, name: "Bob", age: 50 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [{ name: newName, age: 31 }],
    });
  };

  changedNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  toggleShowHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={person.id}
                change={(event) => this.changedNameHandler(event, person.id)}
                click={() => this.deletePersonHandler(index)}
              />
            );
          })}
        </div>
      );
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("banana");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <StyledButton alt={this.state.showPersons} onClick={this.toggleShowHandler}>
          Switch Name
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
