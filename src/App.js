import React, { useState } from 'react';

import Container from './Components/Container/Container';
import Statistics from './Components/Statistics/Statistics';
import FeedbackOptions from './Components/Feedback/FeedbackOptions';
import Section from './Components/Section/Section';
import Notification from './Components/Notification/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = event => {
    switch (event) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const percentage = Math.round((good / countTotalFeedback()) * 100);
    return percentage;
  };
  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          handleClick={handleClick}
        />
      </Section>
      <h2 title="Statistics"> </h2>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given"></Notification>
        )}
      </Section>
    </Container>
  );
}
export default App;
