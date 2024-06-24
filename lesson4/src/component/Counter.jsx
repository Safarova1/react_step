import { Component } from "react";

class Counter extends Component {
  intervalId = null;
  state = {
    value: 10,
  };

  componentDidMount = () => {
    const intervalId = setInterval(() => {
      if (this.state.value > 0) {
        return this.setState({
          value: this.state.value - 1,
        });
      }
      return clearInterval(this.intervalId);
    }, 1000);
  };
  componentWillUnmount = () => {
    clearInterval(this.intervalId);
  };
  render() {
    return <div>{this.state.value}</div>;
  }
}

export default Counter;
