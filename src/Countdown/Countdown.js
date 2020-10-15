import React from 'react';
import Timer from '../Timer/Timer';
import './Countdown.css';

export default function Countdown(props) {
  const timerComponents = [];

  Object.keys(props.timeLeft).forEach((interval) => {

    timerComponents.push(
      <Timer
        number={props.timeLeft[interval]}
        label={interval}
      />
    );

  });

  return (
    <div class="countdown">
      {timerComponents}
    </div>
  )
}
