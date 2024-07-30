import React, { useState, useRef } from 'react';
import './reward.css'; // Ensure this file path matches your directory structure

const Reward = () => {
  const [time, setTime] = useState(25 * 60); // Default to 25 minutes
  const [isRunning, setIsRunning] = useState(false);
  const [cycleCount, setCycleCount] = useState(0);
  const countdownRef = useRef(null);

  // Function to format time as MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    return `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  };

  // Function to start the timer
  const startTimer = () => {
    if (isRunning) return;
    setIsRunning(true);
    countdownRef.current = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(countdownRef.current);
          if (cycleCount < 3) {
            setCycleCount(cycleCount + 1);
            setTime(5 * 60); // Set break time
          } else {
            setCycleCount(0);
            alert('Congratulations! You have completed four cycles.');
            setTime(25 * 60); // Reset time
          }
          return prevTime;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  // Function to reset the timer
  const resetTimer = () => {
    clearInterval(countdownRef.current);
    setTime(25 * 60); // Reset time to 25 minutes
    setCycleCount(0);
    setIsRunning(false);
  };

  return (
    <div>
      <div className="topnav">
        <a className="active" href="index.html">Home</a>
        <a href="TaskWhiz/signUp.html">To Do List</a>
        <a href="meditation.html">AR-Meditation</a>
        <a href="sbgame.html">Stress Burster Game</a>
        <a href="reward.html">Win Rewards</a>
        <a href="motivation.html">Motivate Yourself</a>
      </div>
      <div className="inline-text">
        <h1>
          <p>Want to get rewards for completing tasks??</p>
        </h1>
        <h4>
          <p>Then, Pomodoro Rule is for you, to win an exciting reward all you need to do is:- </p>
        </h4>
        <ol type="1">
          <li>
            <p className="list-paragraph">Set a timer for 25 minutes and work on your task.</p>
          </li>
          <li>
            <p className="list-paragraph">After 25 minutes, take a 5-minute break.</p>
          </li>
          <li>
            <p className="list-paragraph">After 4 breaks, take a 30-minute break.</p>
          </li>
          <li>
            <p className="list-paragraph">Repeat the process till you complete all the tasks.</p>
          </li>
        </ol>
        <h3>
          <p>Boom! As soon as you accomplish all the tasks following the Pomodoro technique, you'll receive rewards!!!</p>
        </h3>
        <h2>
          <p>Good Luck!</p> <br />
        </h2>
      </div>
      <div className="inline-image">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/reward-4040469-3354555.png" alt="Reward" />
      </div>
      <div className="pomodoro-timer">
        <div className="timer">
          <div className="time-left">{formatTime(time)}</div>
        </div>
        <button className="start" onClick={startTimer}>Start</button>
        <button className="reset" onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Reward;
