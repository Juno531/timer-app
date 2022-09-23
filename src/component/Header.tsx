import React from 'react';
import styled from './Header.module.css';

function Header() {
  return (
    <div>
      <div className={styled.headerContainer}>
        <div className={styled.headerTitleContainer}>
          <span className={styled.headerTitle}>Timer</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
