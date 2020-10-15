import React from 'react';
import './Timer.css';

export default function Timer(props) {
  return (
    <div class="timerComponent">
      {props.number}
      <span>{props.label}</span>
    </div>
  )
}
