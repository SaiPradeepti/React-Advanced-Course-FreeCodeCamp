import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text,setText] = useState('k');
  const [isError,setIsError] = useState(false);
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return <div>
    <h2>firstValue: {firstValue}</h2>
    <h2>secondValue: {secondValue}</h2>
    <button className="btn" onClick={() => setIsError(!isError)}>toggle error</button>
    {isError && <h1>Error...</h1>}
    {isError ? <p>there is an error...</p> : <p>there is no error...</p>}
  </div>;
};

export default ShortCircuit;
