import React from 'react';

const Scoreboard = ({ playerWins, computerWins, draws }) => {
  return (
    <div>
      <h2>Placar</h2>
      <p>Humano: {playerWins}</p>
      <p>Robô: {computerWins}</p>
      <p>Empates: {draws}</p>
    </div>
  );
};

export default Scoreboard;