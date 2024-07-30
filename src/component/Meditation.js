import React from 'react';
import './meditation.css'; // Ensure this file path matches your directory structure
import song from '../song/song.mp3'; // Correct import for the audio file
import buddha from './Images/buddha.jpeg';
import deep from '../song/deep-music.mp3';
import backgroundImage from './Images/ThankfulEnchantingDairycow-size_restricted.gif'; // Import the background image

const Meditation = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    minHeight: '100vh', // Ensure it covers the full viewport height
    padding: '20px' // Optional padding
  };

  return (
    <div style={containerStyle}>
      <div className="topnav">
        <a className="active" href="/">Home</a>
        <a href="/TaskWhiz/signUp">To Do List</a>
        <a href="/meditation">AR-Meditation</a>
        <a href="/sbgame">Stress Burster Game</a>
        <a href="/reward">Win Rewards</a>
        <a href="/motivation">Motivate Yourself</a>
        <audio src={song} autoPlay loop></audio>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <h1>Let's do some eye exercises</h1>
        
        <img 
          src="//cdn.shopify.com/s/files/1/0084/6957/7794/files/Eye_exercise_-palm_eye_large.gif?v=1587044280" 
          alt="Eye Exercise Palm Eye"
          height="300"
        />
        <img 
          src="//cdn.shopify.com/s/files/1/0084/6957/7794/files/EYE_PRESS_1_large.gif?v=1587045450" 
          alt="Eye Press Exercise"
          height="300"
        />
        <img 
          src="https://cdn.shopify.com/s/files/1/0084/6957/7794/files/Eye_Exercise-_Eye_roll_1_large.gif?v=1587049359" 
          alt="Eye Roll Exercise"
          height="300"
        />
        
        <h1>Augmented Reality Meditation</h1>
        <p>
          You just have to open your Google Lens and scan the QR code for an ultimate Augmented reality experience in front of your eyes.
        </p>
        <img 
          src={buddha} 
          alt="Buddha"
        />
        
        <p><b>Listen to this peaceful music.</b></p>
        <audio controls>
          <source src={deep} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default Meditation;
