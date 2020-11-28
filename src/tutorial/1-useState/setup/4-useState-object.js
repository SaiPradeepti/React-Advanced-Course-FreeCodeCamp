import React, { useState } from 'react';

const UseStateObject = () => {
  const [name, setName] = useState('John');
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState('random message');
  const changeMessage = () => {
    setMessage('hello world!');
  }
  return (<>
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>{message}</h3>
    <button className="btn" onClick={changeMessage}>change message</button>
  </>);
};

export default UseStateObject;
