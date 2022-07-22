import React from 'react';

function Button({type, children}) {
  return <button className='btn btn-primary my-4' type={type}>
      {children}
  </button>;
}

export default Button;
