import { configureStore } from '@reduxjs/toolkit';
import leaderboardReducer from './leaderboardSlice';

const store = configureStore({
  reducer: {
    leaderboard: leaderboardReducer,
    // Add other reducers here if needed
  },
});

export default store; 