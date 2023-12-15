import React, { useState } from 'react';
function Form({ hadleSubmitGuesses, gameStatus }) {
  const [input, setInput] = useState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        hadleSubmitGuesses(input);

        setInput('');
      }}
      className='guess-input-wrapper'
    >
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        required
        disabled={gameStatus !== 'running'}
        id='guess-input'
        type='text'
        value={input}
        minLength={5}
        maxLength={5}
        pattern='[a-zA-Z]{5}' // minLength ne radi bez ovoga
        onChange={(e) => {
          const inputValue = e.target.value;
          setInput(inputValue.toUpperCase());
        }}
      />
    </form>
  );
}
export default Form;
