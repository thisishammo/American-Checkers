import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLeaderboard } from '../../store/leaderboardSlice';
import './Leaderboard.css';

const Leaderboard = () => {
    const dispatch = useDispatch();
    const { players, status, error } = useSelector((state) => state.leaderboard);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchLeaderboard());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <div>Loading Leaderboard...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="leaderboard">
            <h2>Leaderboard</h2>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Username</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, index) => (
                        <tr key={player.username}>
                            <td>{index + 1}</td>
                            <td>{player.username}</td>
                            <td>{player.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard; 