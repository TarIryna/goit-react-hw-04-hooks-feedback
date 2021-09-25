import './App.css';
import { useState } from 'react';
import Controls from './components/Controls';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const buttonNames = ['good', 'neutral', 'bad'];

  const addFeedback = key => {
    switch (key) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    if (good > 0) {
      return Math.round((good / countTotalFeedback()) * 100);
    }
  };

  return (
    <div className="App">
      <Controls statNames={buttonNames} onBtnFeedback={addFeedback} />
      {countTotalFeedback() > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          percentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
}
