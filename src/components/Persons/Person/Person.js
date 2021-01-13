import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from './Person.css';
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";
import AuthContext from '../../../context/auth-context';


class Person extends Component {
  
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef()
  }

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render() {
    return (
      <Aux>
        <p onClick={this.props.clicked}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input 
        // ref={(inputEl) => {this.inputElement = inputEl}}
        ref={this.inputElementRef} 
        type="text"
        onChange={this.props.change} />
      </Aux>
    );
  } 
};

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func
};

export default withClass(Person, classes.Person);
