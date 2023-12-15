import React from 'react';

function Banner({ children, classType }) {
  return <div className={`${classType} banner`}>{children}</div>;
}

export default Banner;
