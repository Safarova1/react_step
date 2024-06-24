import React, { Component } from "react";

export default class CounterDown extends Component {
  state = {
    value: 0,
  };

  render() {
    return <div>{this.state.value}</div>;
  }
}
