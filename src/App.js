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

  const onLeaveGoodFeedback = index => {
    switch (index) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  const sum = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const percentage = Math.round((good / sum) * 100);
    return percentage;
  };
  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          handleClick={onLeaveGoodFeedback}
        />
      </Section>
      <h2 title="Statistics"> </h2>
      <Section title="Statistics">
        {sum > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={sum}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification title="No feedback given"></Notification>
        )}
      </Section>
    </Container>
  );
}
// const [good, setGood] = useState(0);
// const [neutral, setNeutral] = useState(0);
// const [bad, setBad] = useState(0);
// const handleClick = event => {
//   const { id } = event.target;
//   console.log('Кликнули на кнопку');
//   if (id === 'good') {
//     return setGood(prevGood => prevGood + 1);
//   }
//   if (id === 'neutral') {
//     return setNeutral(prevNeutral => prevNeutral + 1);
//   }
//   if (id === 'bad') {
//     return setBad(prevBad => prevBad + 1);
//   }
// };
// const countTotalFeedback = () => {
//   return good + neutral + bad;
// };
// const countPositiveFeedbackPercentage = () => {
//   return Math.round((good / countTotalFeedback()) * 100);
// };
// return (
//   <Container>
//     <Section title="Please leave feedback">
//       <FeedbackOptions
//         options={{ good, neutral, bad }}
//         handleClick={handleClick}
//       />
//     </Section>
//     <h2 title="Statistics"> </h2>
//     <Section title="Statistics">
//       {countTotalFeedback() ? (
//         <Statistics
//           good={good}
//           neutral={neutral}
//           bad={bad}
//           total={countTotalFeedback}
//           positivePercentage={countPositiveFeedbackPercentage()}
//         />
//       ) : (
//         <Notification title="No feedback given"></Notification>
//       )}
//     </Section>
//   </Container>
// );
// }

export default App;
