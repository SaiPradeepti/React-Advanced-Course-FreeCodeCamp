import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const decrease = () => {setValue(value-1)}
  const increase = () => {setValue(value+1)}
  const reset = () => {setValue(0)}
  const increaseLater = () => {
    setTimeout(() => {setValue((prevState) => {
      return prevState + 1;
    })}, 2000);
  }
  return (<>
    <section style={{margin: '4rem 0'}}>
      <h2>Regular Counter</h2>
      <h1 className='result'>{value}</h1>
      <button className="btn" onClick={() => decrease()}>Decrease</button>
      <button className="btn" onClick={reset}>Reset</button>
      <button className="btn" onClick={() => increase()}>Increase</button>
    </section>
    <section>
      <h2>More Complex Counter</h2>
      <h1 className='result'>{value}</h1>
      <button className="btn" onClick={() => increaseLater()}>Increase Later</button>
    </section>
  </>);
};

export default UseStateCounter;
