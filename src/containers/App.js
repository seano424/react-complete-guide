import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
// import styled from "styled-components";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Aux"
import AuthContext from "../context/auth-context";

class App extends Component {
  state = {
    persons: [
      { id: 12345, name: "Sean", age: 31 },
      { id: 12346, name: "Manuel", age: 99 },
      { id: 12347, name: "Bob", age: 50 },
    ],
    otherState: "some other value",
    showPersons: false,
    changeCounter: 0,
    authenticated: false
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
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  };

  loginHandler = () => {
    this.setState({authenticated: true})
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
          persons={this.state.persons}
          change={this.changedNameHandler}
          click={this.deletePersonHandler} />
    }

    return (
      <Aux>
        <AuthContext.Provider value={{
          authenticated: this.state.authenticated, 
          login: this.loginHandler}}>
          <Cockpit
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.toggleShowHandler}
            login={this.loginHandler}
          />
          {persons}
        </AuthContext.Provider>
      </Aux>
      
    );
  }
}

export default withClass(App, classes.App);
