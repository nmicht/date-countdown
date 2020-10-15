import React from 'react';
import './Timer.css';

export default function Timer(props) {
  return (
    <div class="timerComponent">
      <span>{props.label}</span>
      {props.number}
    </div>
  )
}
