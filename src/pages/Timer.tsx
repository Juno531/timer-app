import React, { useState } from 'react';
import styled from './Timer.module.css';

function Timer() {
  const [minutes, setMinutes] = useState(0);
  const [tensSecond, setTensSecond] = useState(0);
  const [second, setSecond] = useState(0);
  const [timerWork, setTimerWork] = useState(false);

  const timerPlus = () => {
    setMinutes(minutes + 1);
  };

  const timerMinus = () => {
    if (minutes > 0) setMinutes(minutes - 1);
  };

  const onStartClick = () => {
    setTimerWork(true);
    setInterval(() => {}, 1000);
  };

  const timerTime = `${minutes}:${tensSecond}${second}`;
  return (
    <div className={styled.TimerContainer}>
      <div className={styled.TimerHeader}>
        <div className={styled.timerText}>{`${timerTime}`}</div>
        <div className={styled.TimerHeaderButtons}>
          <button
            type="button"
            className={styled.timerButton}
            onClick={onStartClick}
          >
            START
          </button>
          <button type="button" className={styled.timerButton}>
            STOP
          </button>
        </div>
      </div>

      <div className={styled.TimerMenu}>
        <div className={styled.setTimeMenuContainer}>
          <button
            type="button"
            className={`${styled.timerPlus} ${styled.setTimeMenuItem}`}
            onClick={timerPlus}
          >
            +
          </button>
          <button
            type="button"
            className={`${styled.timerMinus} ${styled.setTimeMenuItem}`}
            onClick={timerMinus}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
