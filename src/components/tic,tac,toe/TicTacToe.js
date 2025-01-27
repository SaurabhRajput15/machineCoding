import React, { useState } from 'react';
import "./TicTacToe.css"

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); // 3x3 flattened array
  const [isXNext, setIsXNext] = useState(true); // Toggle between X and O
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] || winner) return; // Ignore if cell is already filled or game is over

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) setWinner(gameWinner);
  };

  const calculateWinner = (board) => {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6],           // Diagonals
    ];

    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return board.every(cell => cell) ? 'Draw' : null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {board.map((cell, index) => (
          <div key={index} className="cell" onClick={() => handleClick(index)}>
            {cell}
          </div>
        ))}
      </div>
      <div className="status">
        {winner ? (
          <h2>{winner === 'Draw' ? "It's a Draw!" : `Winner: ${winner}`}</h2>
        ) : (
          <h2>Next Player: {isXNext ? 'X' : 'O'}</h2>
        )}
      </div>
      <button className="reset-btn" onClick={resetGame}>Restart Game</button>
    </div>
  );
};

export default TicTacToe;
