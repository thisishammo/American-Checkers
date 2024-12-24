import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch leaderboard data from the backend
export const fetchLeaderboard = createAsyncThunk(
  'leaderboard/fetchLeaderboard',
  async () => {
    const response = await axios.get('http://localhost:5000/api/leaderboard');
    return response.data.leaderboard;
  }
);

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState: {
    players: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeaderboard.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLeaderboard.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.players = action.payload;
      })
      .addCase(fetchLeaderboard.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default leaderboardSlice.reducer; 