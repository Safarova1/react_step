import React, { Component } from "react";
import Feedback from "./components/Feedback";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Section from "./components/Section";
import Notification from "./components/Notification";

class App extends Component {
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
        : Math.round(((this.state.good + 1) / (this.state.total +1)) * 100);

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
    const options = ["good", "neutral", "bad"];
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            goodClick={this.goodClick}
            neutralClick={this.neutralClick}
            badClick={this.badClick}
            // options={options}
            // onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.state.total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positive={this.state.positive}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
