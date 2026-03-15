import React, { Component } from "react";
// class components - Old way to create component used in legacy codebases

// Class syntax:

class Welcome extends Component {
  render() {
    return <h1 className="classComponent">Hello! from class component</h1>;
  }
}

// render() : Every class component must have render() method that returns JSX.

export default Welcome;
