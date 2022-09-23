import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from './App.module.css';
import Timer from './pages/Timer';
import Header from './component/Header';
import Navigation from './component/Navigation';
import StopWatch from './pages/StopWatch';

function App() {
  return (
    <div className={styled.appContainer}>
      <header className={styled.headerContainer}>
        <Header />
      </header>
      <section className={styled.ContentContainer}>
        <div className={styled.navigation}>
          <Navigation />
        </div>
        <div className={styled.TimerContainer}>
          <Routes>
            <Route path="/timer" element={<Timer />} />
            <Route path="/stopwatch" element={<StopWatch />} />
          </Routes>
        </div>
      </section>
    </div>
  );
}

export default App;
