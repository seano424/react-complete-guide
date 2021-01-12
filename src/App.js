import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Sean", age: 31 },
      { name: "Manuel", age: 99 },
    ],
    otherState: "some other value",
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 31 },
        { name: "Manuel", age: 99 },
      ]
    });
  };

  changedNameHandler = (event) => {
    this.setState({
      persons: [
        { name: "Sean", age: 31 },
        { name: event.target.value, age: 99 },
      ]
    })
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is really working!</p>
        <button 
        style={style}
        onClick={this.switchNameHandler.bind(this, "Patrick")}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "Sean")} 
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          change={this.changedNameHandler}
        />
      </div>
    );
  }
}

export default App;
