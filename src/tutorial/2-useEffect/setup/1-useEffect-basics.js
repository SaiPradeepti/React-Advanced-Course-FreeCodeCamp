import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
      console.log('useEffect called');
    // useEffect or hooks cannot be placed inside conditional statements
    // but consitional statement can be used inside useEffect callback function
    if(value > 0){
      document.querySelector('title').innerText = `New message(${value})`;
    }  
  }, [value]);
  // second parameter is array of dependencies
  // whenever the dependency value gets updated useEffect is run
  // if second parameter of useEffect is [] empty array, it says run on initial render only
  
  useEffect(() => {
    console.log('hello world');
  }, []);

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value+1)}>Click here</button>
    </>
  );
};

export default UseEffectBasics;
