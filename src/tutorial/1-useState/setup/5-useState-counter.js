import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const decrease = (value) => {setValue(value-=1)}
  const increase = (value) => {setValue(value+=1)}
  const reset = () => {setValue(0)}
  return (<>
    <section style={{margin: '4rem 0'}}>
      <h2>Regular Counter</h2>
      <h1 className='result'>{value}</h1>
      <button className="btn" onClick={() => decrease(value)}>Decrease</button>
      <button className="btn" onClick={reset}>Reset</button>
      <button className="btn" onClick={() => increase(value)}>Increase</button>
    </section>
  </>);
};

export default UseStateCounter;
