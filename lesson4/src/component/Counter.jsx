import { Component } from "react";

class Counter extends Component {
  intervalId = null;
  state = {
    count: 10,
  };

  componentDidMount = () => {
    const intervalId = setInterval(() => {
      if (this.state.value > 0) {
        return;
        this.setState({
          count: this.state.count - 1,
        });
      }
      return;
      clearInterval(this.intervalId);
    }, 1000);
  };

  render() {
    return <div>{this.state.value}</div>;
  }
}

export default Counter;
