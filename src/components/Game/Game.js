import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Form from '../Form';
import GuessResult from '../GuessResult/GuessResult';
import WonBanner from '../WonBanner/WonBanner';
import LoseBanner from '../LoseBanner/LoseBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Button from '../Button/Button';
import Keyboard from '../Keyboard/Keyboard';
import { checkGuess } from '../../game-helpers';
// Pick a random word on every pageload.
// const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });
// console.log(answer);

function Game() {
  const [answer, setAnswer] = useState(() => sample(WORDS));
  const [guessResults, setGuessResults] = useState([]);
  const [gameStatus, setGameStatus] = useState('running');
  console.info({ answer });
  function hadleSubmitGuesses(inputs) {
    const nextGuessesResults = [...guessResults, inputs];
    setGuessResults(nextGuessesResults);
    if (inputs === answer) {
      setGameStatus('won');
    } else if (nextGuessesResults.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }
  function gameRestart() {
    const newAnswer = sample(WORDS);
    setGuessResults([]);
    setGameStatus('running');
    setAnswer(newAnswer);
  }
  const validatedGuesses = guessResults.map((guess) =>
    checkGuess(guess, answer)
  );

  return (
    <>
      {gameStatus === 'won' && <WonBanner numOfGuesses={guessResults.length} />}
      {gameStatus === 'lost' && <LoseBanner answer={answer} />}
      {gameStatus !== 'running' && (
        <Button
          buttonStyle={'button-23'}
          gameRestartHandler={() => {
            gameRestart();
          }}
        >
          Restart Game
        </Button>
      )}
      <GuessResult guessResults={guessResults} answer={answer} />
      <Keyboard validatedGuesses={validatedGuesses} />
      <Form hadleSubmitGuesses={hadleSubmitGuesses} gameStatus={gameStatus} />
    </>
  );
}

export default Game;
