import { Component } from "react";

import Container from "./Components/Container/Container";
import Statistics from "./Components/Statistics/Statistics";
import FeedbackOptions from "./Components/Feedback/FeedbackOptions";
import Section from "./Components/Section/Section";
import Notification from "./Components/Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = (event) => {
    this.setState((state) => ({
      [event]: state[event] + 1,
    }));
    console.log("Кликнули на кнопку");
  };

  countTotalFeedback = () => {
    const sum = Object.values(this.state).reduce((a, b) => a + b, 0);
    return sum;
  };

  countPositiveFeedbackPercentage = () => {
    const percentage = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    return percentage;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const obj = Object.keys(this.state);
    const feedback = this.handleClick;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions options={obj} handleClick={feedback} />
        </Section>
        <h2 title="Statistics"> </h2>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification title="No feedback given"></Notification>
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
