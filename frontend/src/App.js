import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CheckersBoard from './components/Game/CheckersBoard';
import Leaderboard from './components/Leaderboard/Leaderboard';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to American Checkers!</h1>
        <nav>
          <Link to="/game" className="nav-link">Start Game</Link>
          <Link to="/leaderboard" className="nav-link">Leaderboard</Link>
        </nav>
        <Routes>
          <Route path="/game" element={<CheckersBoard />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
