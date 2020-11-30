import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text,setText] = useState('k');
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return <div>
    <h2>firstValue: {firstValue}</h2>
    <h2>secondValue: {secondValue}</h2>
    <h2>{text || 'John Doe'}</h2>
    <h2>{text && 'John Doe'}</h2>
  </div>;
};

export default ShortCircuit;
