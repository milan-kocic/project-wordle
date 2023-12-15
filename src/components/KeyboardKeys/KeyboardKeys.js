import React from 'react';

function KeyboardKeys({ keyStyle, children }) {
  return <div className={`${keyStyle} `}>{children}</div>;
}

export default KeyboardKeys;
