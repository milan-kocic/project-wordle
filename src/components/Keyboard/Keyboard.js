/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
import React from 'react';

import { KEYS } from '../../dataKeys';

function getStatusByLetter(validatedGuesses) {
  const statusObj = {};

  validatedGuesses.forEach((guess) => {
    guess.forEach(({ letter, status }) => {
      statusObj[letter] = status;
    });
  });
  return statusObj;
}

function Keyboard({ validatedGuesses }) {
  let statusByLetter = getStatusByLetter(validatedGuesses);

  return (
    <div className='keyboard'>
      {KEYS.map((row, index) => (
        <div className='key-list' key={index}>
          {row.map((letter) => (
            <div key={letter} className={`key ${statusByLetter[letter] || ''}`}>
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
// className='key'
// className={`key ${statusByLetter[letter] || ''}`
