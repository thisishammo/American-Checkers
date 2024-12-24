import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initializeBoard, makeMove } from '../../store/gameSlice';

function CheckersBoard() {
    const dispatch = useDispatch();
    const board = useSelector(state => state.game.board);
    const currentPlayer = useSelector(state => state.game.currentPlayer);

    useEffect(() => {
        dispatch(initializeBoard());
    }, [dispatch]);

    const handleCellClick = (row, col) => {
        // Logic to handle cell selection and move
        dispatch(makeMove(row, col));
    };

    return (
        <div className="checkers-board grid grid-cols-8">
            {board.map((row, rowIndex) =>
                row.map((cell, colIndex) => (
                    <div
                        key={`${rowIndex}-${colIndex}`}
                        className={`cell ${cell.color}`}
                        onClick={() => handleCellClick(rowIndex, colIndex)}
                    >
                        {cell.piece && <span className={`piece ${cell.piece.owner}`}>{cell.piece.type}</span>}
                    </div>
                ))
            )}
        </div>
    );
}

export default CheckersBoard; 