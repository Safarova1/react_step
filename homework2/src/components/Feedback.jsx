import React, { Component } from "react";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  };

  goodvalue = () => {
    this.setState({ good: this.state.good + 1 });
  };

  neutralvalue = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };

  badvalue = () => {
    this.setState({ bad: this.state.bad + 1 });
  };

  countTotalFeedback = () => {
    this.setState({
      total: this.state.good + this.state.neutral + this.state.bad + 1,
    });
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFeedback =
      this.state.good === 0
        ? 0
        : Math.round(((this.state.good + 1) / (this.state.total + 1)) * 100);

    this.setState({ positive: positiveFeedback });
  };

  goodClick = () => {
    this.goodvalue();
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  neutralClick = () => {
    this.neutralvalue();
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  badClick = () => {
    this.badvalue();
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <button onClick={this.goodClick}>Good</button>
        <button onClick={this.neutralClick}>Neutral</button>
        <button onClick={this.badClick}>Bad</button>

        <h1>Statistics</h1>
        <p>
          Good: <span>{this.state.good}</span>
        </p>
        <p>
          Neutral: <span>{this.state.neutral}</span>
        </p>
        <p>
          Bad: <span>{this.state.bad}</span>
        </p>
        <p>
          Total: <span>{this.state.total}</span>
        </p>
        <p>
          Positive: <span>{this.state.positive}%</span>
        </p>
      </>
    );
  }
}

export default Feedback;








