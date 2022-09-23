import React from 'react';
import styled from './Navigation.module.css';
import { ReactComponent as TimerSvg } from '../assets/svg/timer.svg';
import { ReactComponent as StopWatchSvg } from '../assets/svg/stopwatch.svg';

function Navigation() {
  return (
    <div className={styled.naviContainer}>
      <div className={`${styled.menuContainer} ${styled.timerContainer}`}>
        <div className={`${styled.timer} ${styled.naviItem}`}>
          <TimerSvg className={`${styled.timerIcon} ${styled.naviIcon}`} />
          <span className={`${styled.timerText} ${styled.naviText}`}>
            타이머
          </span>
        </div>
      </div>
      <div className={`${styled.menuContainer} ${styled.stopWatchContainer}`}>
        <div className={`${styled.stopWatch} ${styled.naviItem}`}>
          <StopWatchSvg
            className={`${styled.stopWatchIcon} ${styled.naviIcon}`}
          />
          <span className={`${styled.stopWatchText} ${styled.naviText}`}>
            스탑워치
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
