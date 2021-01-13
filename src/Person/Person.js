import React from "react";
// import './Person.css';
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  background-color: #ffd166;
  color: white;
`;

const person = (props) => {
  return (
    <StyledDiv onClick={props.click}>
      <p>
        {" "}
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} />
    </StyledDiv>
  );
};

export default person;
