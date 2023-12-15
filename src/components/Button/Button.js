// eslint-disable-next-line no-unused-vars
import React from 'react';

function Button({ children, buttonStyle, gameRestartHandler }) {
  return (
    <button className={buttonStyle} onClick={gameRestartHandler}>
      {children}
    </button>
  );
}

export default Button;
