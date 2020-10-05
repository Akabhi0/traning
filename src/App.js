import React, { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

const styleMenuItem = {
  float: "left",
  padding: "10px",
  listStyleType: "none",
  color: "white"
}

function aa2() {
  console.log("krishn mani 2")
}

const aa3 = () => {
  console.log("krishn mani 3")
}

/**
 * onClick , onSelect ,onDrag etc.......
 * they are action in javascript 
 * we have to pass the function as a parameter 
 * we dont have to call a function inside them
 */

/**
 * function call - functionCall()
 * function pass - functionPass
 */

/**
 * now THIS key word is reseved to js
 * this key word used in class componet of react 
 * this key word used to accessing the current object of the class
 */


function App() {
  return (
    <Fragment >
      <ul style={{ backgroundColor: "coral", overflow: "auto", margin: "0px", padding: "0px" }}>
        <li style={styleMenuItem} onClick={() => { console.log("krishn mani") }}>Home</li>
        <li style={styleMenuItem} onClick={aa2}>Carrer</li>
        <li style={styleMenuItem} onClick={aa3}>Contact</li>
        <li style={styleMenuItem} onClick={() => { console.log("krishn mani 4") }}>About</li>
      </ul>
    </Fragment>
  );
}

export default App;
