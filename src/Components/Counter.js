import React, { Component } from "react";

const counterStyle = {
  border: "3px solid black",
  borderRadius: "8px",
  color: "black",
  display: "block",
  fontSize: "20px",
  margin: "auto",
  marginBottom: "200px",
  marginTop: "50px",
  padding: "10px",
  textAlign: "center",
  width: "50%"
};

const buttonStyle = {
  borderRadius: "8px",
  color: "white",
  display: "block",
  fontSize: "22px",
  margin: "auto",
  padding: "10px",
  width: "50%"
};

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.incrementHandler = this.incrementHandler.bind(this);
    this.decrementHandler = this.decrementHandler.bind(this);
  }

  incrementHandler() {
    this.setState({ counter: this.state.counter + 1 });
  }

  decrementHandler() {
    this.setState({ counter: this.state.counter - 1 });
  }
  render() {
    return (
      <div>
        <span style={counterStyle}>{this.state.counter}</span>
        <button
          style={{ ...buttonStyle, background: "green" }}
          onClick={this.incrementHandler}
        >
          Increment
        </button>
        <button
          style={{ ...buttonStyle, background: "orange" }}
          onClick={this.decrementHandler}
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
