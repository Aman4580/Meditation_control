import React from 'react';
import './App.css';
import Home from './component/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import About from './component/About';
// import ToDoList from './component/ToDoList';
import Meditation from './component/Meditation';
import Game from './component/Game';
import Reward from './component/Reward';
import Motivation from './component/Motivation';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/taskwhiz/signup" element={<ToDoList />} /> */}
          <Route path="/meditation" element={<Meditation />} />
          <Route path="/sbgame" element={<Game />} />
          <Route path="/reward" element={<Reward/>} />
          <Route path="/motivation" element={<Motivation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
