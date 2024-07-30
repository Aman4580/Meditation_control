import React, { useState, useEffect, useCallback } from 'react';
import './sbgame.css';
import popSound from '../song/pop.wav'; // Update the path to your sound file

const bubbles = ['one', 'two', 'three', 'four', 'five'];
const totalBubbles = 50;

const StressBursterGame = () => {
  const [noPop, setNoPop] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [currentBubble, setCurrentBubble] = useState(0);
  const [showShadow, setShowShadow] = useState(false);
  const [showWinner, setShowWinner] = useState(false);
  const [showLoser, setShowLoser] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  // Function to create a new bubble
  const createBubble = useCallback(() => {
    const bubbleDiv = document.createElement('div');
    const rand = Math.floor(Math.random() * bubbles.length);
    bubbleDiv.className = `bubble bubble-${bubbles[rand]}`;
    bubbleDiv.style.left = `${Math.floor(Math.random() * (window.innerWidth - 150))}px`;
    bubbleDiv.dataset.number = currentBubble;
    setCurrentBubble(prev => prev + 1);
    document.body.appendChild(bubbleDiv);
    animateBubble(bubbleDiv);
  }, [currentBubble]);

  // Function to animate the bubble
  const animateBubble = (elem) => {
    let position = 0;
    const random = Math.floor(Math.random() * 6 - 3);
    const interval = setInterval(() => {
      if (position >= window.innerHeight) {
        clearInterval(interval);
        elem.remove();
        if (!gameOver) {
          if (noPop < totalBubbles) {
            setNoPop(prev => prev + 1);
          }
        }
      } else {
        position++;
        elem.style.top = `${window.innerHeight - position}px`;
      }
    }, 12 - Math.floor(noPop / 10) + random);
  };

  // Function to handle bubble click
  const deleteBubble = (elem) => {
    new Audio(popSound).play();
    elem.remove();
    setNoPop(prev => prev + 1);
  };

  // Event handler for clicks
  const handleClick = (event) => {
    if (event.target.classList.contains('bubble')) {
      deleteBubble(event.target);
    }
  };

  // Function to restart the game
  const restartGame = () => {
    document.querySelectorAll('.bubble').forEach(bubble => bubble.remove());
    setGameOver(false);
    setNoPop(0);
    setShowShadow(false);
    setShowWinner(false);
    setShowLoser(false);
    setGameStarted(false); // Reset game started state
  };

  // Function to start the game
  const startGame = () => {
    restartGame();
    setGameStarted(true); // Set game started to true
  };

  // Effect to handle game loop
  useEffect(() => {
    let intervalId;
    if (gameStarted && !gameOver && noPop < totalBubbles) {
      intervalId = setInterval(() => {
        createBubble();
      }, 900 + Math.floor(Math.random() * 500 - 100));
    } else {
      clearInterval(intervalId);
      if (gameStarted) {
        setShowShadow(true);
        if (noPop === totalBubbles) {
          setShowWinner(true);
        } else {
          setShowLoser(true);
        }
      }
    }

    return () => clearInterval(intervalId);
  }, [gameStarted, gameOver, noPop, createBubble]);

  return (
    <div onClick={handleClick}>
      <div className="topnav">
        <a className="active" href="/">Home</a>
        <a href="/TaskWhiz/signUp">To Do List</a>
        <a href="/meditation">AR-Meditation</a>
        <a href="/sbgame">Stress Burster Game</a>
        <a href="/reward">Win Rewards</a>
        <a href="/motivation">Motivate Yourself</a>
      </div>

      <div className="score-board">
        <b><p>You have Popped <span className="score"> {noPop} </span> Bubbles</p></b>
      </div>

      {showShadow && (
        <div className="shadow">
          {showWinner ? (
            <div className="wrapper winner">
              <h3>Congrats🎉🎉</h3>
              <h3>All 50 bubbles Popped</h3>
              <p>You are a Winner!🎉🎉</p>
            </div>
          ) : (
            <div className="wrapper loser">
              <h4>Sorry</h4>
              <h4>You Popped <span className="score"> {noPop} </span> Bubbles</h4>
              <p>Play Again?</p>
              <button className="restart" onClick={restartGame}>Yes</button>
              <button className="cancel" onClick={() => setShowShadow(false)}>No</button>
            </div>
          )}
        </div>
      )}

      {!gameOver && !showShadow && (
        <div className="main-game">
          <h1>Click to start</h1>
          <button className="start-btn" onClick={startGame}>Start</button>
        </div>
      )}
    </div>
  );
};

export default StressBursterGame;
