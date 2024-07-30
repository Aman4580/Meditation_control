import React from 'react';
import backg from './Images/backg.png';
import calmwork from './Images/calmwork.jpg';

function Home() {
  return (
    <div>
      {/* Navbar */}
      <div className="topnav">
        <a className="active" href="/">Home</a>
        <a href="#about">About</a>
        <a href="/todo">To Do List</a>
        <a href="/meditation">AR-Meditation</a>
        <a href="/sbgame">Stress Burster Game</a>
        <a href="/reward">Win Rewards</a>
        <a href="/motivation">Motivate Yourself</a>
      </div>

      {/* Background Image */}
      <div>
        <img src={backg} alt="Background" style={{ width: '100%' }} />
      </div>

      {/* About Us Section */}
      <h1 style={{ textAlign: 'center' }}>About Us</h1>
      <div id="about" className="container py-3">
        <div className="row">
          <div className="col-sm-12">
            <div className="about-section d-block clearfix bg-light p-3 shadow">
              <a className="float-left mr-3" href="12">
                <img src={calmwork} className="rounded" alt="Calm Work" />
              </a>
              <p>
                A stressful work environment can contribute to problems such as headache, stomachache, sleep disturbances, short temper, and difficulty concentrating. Our engineer productivity tool is a comprehensive solution designed to help engineers achieve optimal productivity while maintaining their mental and emotional well-being. This platform enables users to track task completion, practice AR meditation, play stress burster games, and engage in motivational exercises to cope with stress and anxiety at work.
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
