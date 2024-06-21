import React, { Component } from "react";

export default class Product extends Component {
  state = {
    value: 0,
    active: true,
  };

  minus = () => {
    this.setState({
      value: this.state.value - 1,
      active: (this.state.active = false),
    });
  };

  plus = () => {
    this.setState({
      value: this.state.value + 1,
      active: (this.state.active = true),
    });
  };

  render() {
    return (
      <div>
        <h2>{this.state.value}</h2>
        {this.state.active == true ? (
          <p> uvelicivayetsya</p>
        ) : (
          <p>umenshayetysa </p>
        )}

        <button onClick={this.plus}>+</button>
        <button onClick={this.minus}>-</button>
      </div>
    );
  }
}
