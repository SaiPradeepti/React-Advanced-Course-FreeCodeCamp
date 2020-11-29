import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  useEffect(() => {
    document.querySelector('title').innerText = `New message(${value})`;
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
