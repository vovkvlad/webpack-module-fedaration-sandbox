import React from 'react';

export function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>{children}</button>
  );
}