import React, { useState } from 'react';
import Scoreboard from './Principal02';
import GameResult from './Principal03';

const choices = ['Pedra', 'Papel', 'Tesoura'];

const getRandomChoice = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

const Game = () => {
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const [playerWins, setPlayerWins] = useState(0);
  const [computerWins, setComputerWins] = useState(0);
  const [draws, setDraws] = useState(0);

  const playGame = (choice) => {
    const compChoice = getRandomChoice();
    setPlayerChoice(choice);
    setComputerChoice(compChoice);

    if (choice === compChoice) {
      setResult('Empatou');
      setDraws((prevDraws) => prevDraws + 1);
    } else if (
      (choice === 'Pedra' && compChoice === 'Tesoura') ||
      (choice === 'Papel' && compChoice === 'Pedra') ||
      (choice === 'Tesoura' && compChoice === 'Papel')
    ) {
      setResult('Humano Venceu!');
      setPlayerWins((prevPlayerWins) => prevPlayerWins + 1);
    } else {
      setResult('Robô Venceu!');
      setComputerWins((prevComputerWins) => prevComputerWins + 1);
    }
  };

  const resetGame = () => {
    setPlayerChoice('');
    setComputerChoice('');
    setResult('');
  };

  return (
    <div>
      <h1>Pedra, Papel, Tesoura</h1>
      {choices.map((choice) => (
        <button key={choice} onClick={() => playGame(choice)}>
          {choice}
        </button>
      ))}
      <GameResult
        result={result}
        playerChoice={playerChoice}
        computerChoice={computerChoice}
        resetGame={resetGame}
      />
      <Scoreboard playerWins={playerWins} computerWins={computerWins} draws={draws} />
    </div>
  );
};

export default Game;