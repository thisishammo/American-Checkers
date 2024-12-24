import React from 'react';
import './CheckersBoard.css'; // Optional: For styling the board

const CheckersBoard = () => {
    const renderSquare = (i, j) => {
        const isBlack = (i + j) % 2 === 1;
        const piece = getPiece(i, j);
        return (
            <div
                key={`${i}-${j}`}
                className={`square ${isBlack ? 'black' : 'white'}`}
            >
                {piece && <div className={`piece ${piece}`}></div>}
            </div>
        );
    };

    const getPiece = (i, j) => {
        if (i < 3 && (i + j) % 2 === 1) return 'red';
        if (i > 4 && (i + j) % 2 === 1) return 'blue';
        return null;
    };

    return (
        <div className="checkers-board">
            <h2>Checkers Game</h2>
            <div className="board">
                {[...Array(8)].map((_, i) =>
                    [...Array(8)].map((_, j) => renderSquare(i, j))
                )}
            </div>
        </div>
    );
};

export default CheckersBoard; 