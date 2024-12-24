import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Leaderboard from './components/Leaderboard/Leaderboard.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Leaderboard />
  </React.StrictMode>
);
