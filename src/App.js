import React, {useState, useEffect} from 'react';
import './App.css';
import Countdown from './Countdown/Countdown'

function App() {
  const SEC = 1000;
  /**
   * Calculate the time remaining for the event
   * @return {Time} [description]
   */
  const calculateTimeLeft = () => {
    let eventDate = new Date('2020-11-30T23:25:00-05:00');
    let difference = eventDate - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (SEC * 60 * 60 * 24)),
        hours: Math.floor((difference / (SEC * 60 * 60)) % 24),
        minutes: Math.floor((difference / SEC / 60) % 60),
        seconds: Math.floor((difference / SEC) % 60)
      }
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, SEC);
  });

  return (
    <React.Fragment>
      <header>
        <h1>Time to see you again</h1>
      </header>
      <main>
        <Countdown timeLeft={timeLeft} />
      </main>
      <footer>
        <p>Made with <span role="img" aria-label="love">💖</span> by <a href="https://github.com/nmicht/">@nmicht</a> at Berlin</p>
      </footer>
    </React.Fragment>

  );
}

export default App;

/**
 * @typedef {Object} Time
 * @property {number} days - The amound of days
 * @property {number} hours - The amount of hours
 * @property {number} minutes - The amount of minutes
 * @property {number} seconds - The amount of seconds
 */
