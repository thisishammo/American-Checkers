import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLeaderboard } from '../../store/leaderboardSlice';

function Leaderboard() {
    const dispatch = useDispatch();
    const leaderboard = useSelector(state => state.leaderboard.players);

    useEffect(() => {
        dispatch(fetchLeaderboard());
    }, [dispatch]);

    return (
        <div className="leaderboard">
            <h2>Global Leaderboard</h2>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Username</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboard.map((player, index) => (
                        <tr key={player.id}>
                            <td>{index + 1}</td>
                            <td>{player.username}</td>
                            <td>{player.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Leaderboard; 