import { useState } from 'react';
import MainContainer from './components/MainContainer';
import PageHeader from './components/PageHeader';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

const App = () => {
  const [feedbacks, setFeedbacks] = useState({ good: 0, neutral: 0, bad: 0 });

  const changeFeedback = feedbackName => {
    setFeedbacks(prevFeedbaks => ({
      ...prevFeedbaks,
      [feedbackName]: prevFeedbaks[feedbackName] + 1,
    }));
  };

  const countTotalFeedback = () =>
    Object.values(feedbacks).reduce((acc, value) => acc + value, 0);

  const countPositiveFeedbackPercentage = () =>
    countTotalFeedback()
      ? Math.round((feedbacks.good / countTotalFeedback()) * 100)
      : 0;

  return (
    <MainContainer>
      <PageHeader title="React Homework 04. Feedback" />

      <Section title="Please Leave Feedback">
        <FeedbackOptions
          options={Object.keys(feedbacks)}
          onLeaveFeedback={changeFeedback}
        />
      </Section>

      <Section title="Feedback Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={feedbacks.good}
            neutral={feedbacks.neutral}
            bad={feedbacks.bad}
            total={countTotalFeedback()}
            likes={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </MainContainer>
  );
};

export default App;
