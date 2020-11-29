import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  useEffect(() => {
    // useEffect or hooks cannot be placed inside conditional statements
    // but consitional statement can be used inside useEffect callback function
    if(value > 0){
      document.querySelector('title').innerText = `New message(${value})`;
    }  
  });
  const [value, setValue] = useState(0);
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value+1)}>Click here</button>
    </>
  );
};

export default UseEffectBasics;
