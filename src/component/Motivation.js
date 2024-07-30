import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaVolumeUp, FaCopy, FaTwitter } from 'react-icons/fa';

const Motivation = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const category = 'inspirational'; // Or any category you want

  const fetchQuote = async () => {
    try {
      const response = await axios.get(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
        headers: {
          'X-Api-Key': 'nWkZ7EkOyTUhxHa0UFr+2Q==466qR0RUZVGeYiFA',
          'Content-Type': 'application/json'
        }
      });

      console.log('API Response:', response); // Log the entire response to debug
      if (response.status === 200 && response.data.length > 0) {
        const data = response.data;
        setQuote(data[0].quote);
        setAuthor(data[0].author);
      } else {
        alert('No quotes found. Please try again later.');
      }
    } catch (error) {
      console.error('Error fetching quote:', error);
      alert('Something went wrong. Please refresh!');
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleSound = () => {
    const utterance = new SpeechSynthesisUtterance(`${quote}`);
    speechSynthesis.speak(utterance);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(quote);
  };

  const handleTweet = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?url=${quote}`;
    window.open(tweetUrl, '_blank');
  };

  return (
    <div>
      <div className="topnav navbar">
        <a className="active" href="/">Home</a>
        <a href="/todo">To Do List</a>
        <a href="/meditation">AR-Meditation</a>
        <a href="/sbgame">Stress Burster Game</a>
        <a href="/reward">Win Rewards</a>
        <a href="/motivation">Motivate Yourself</a>
      </div>

      <div className="quote-box">
        <div className="wrapper">
          <header>Quote of the Day</header>
          <div className="content">
            <div className="quote-area">
              <i className="fas fa-quote-left"></i>
              <p className="quote">{quote}</p>
              <i className="fas fa-quote-right"></i>
            </div>
            <div className="author">
              <span>__</span>
              <span className="name">{author}</span>
            </div>
          </div>
          <div className="buttons">
            <div className="features">
              <ul>
                <li className="sound" onClick={handleSound}><FaVolumeUp /></li>
                <li className="copy" onClick={handleCopy}><FaCopy /></li>
                <li className="twitter" onClick={handleTweet}><FaTwitter /></li>
              </ul>
              <button onClick={fetchQuote}>New Quote</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motivation;
