import React from 'react';

const GameResult = ({ result, playerChoice, computerChoice, resetGame }) => {
  return (
    <div>
      <h2>Resultado</h2>
      <p>Você Escolheu: {playerChoice}</p>
      <p>Robô Escolheu: {computerChoice}</p>
      <h3>{result}</h3>
      <button onClick={resetGame}>Jogar Novamente</button>
    </div>
  );
};

export default GameResult;