/* eslint-disable no-unused-vars */
import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <p className='guess'>
      {range(5).map((letter) => {
        const className = result ? `cell ${result[letter].status}` : 'cell';

        return (
          <span className={className} key={letter}>
            {value ? value[letter] : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
