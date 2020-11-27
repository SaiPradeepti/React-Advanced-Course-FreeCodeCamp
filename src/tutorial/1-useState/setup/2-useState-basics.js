import React, { useState } from 'react';

const UseStateBasics = () => {
  //useState is a function which returns an array
  //array 2 values, a value and function, function defines the value

  // console.log(useState('hello world'));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [text, setText] = useState('random title')
  // first element of array,i.e., value is assigned to text 
  // second element of array,i.e., function is assigned to setText 
  const handleClick = () => {
    if(text === 'random title'){
      setText('hello world');
    }else{
      setText('random title');
    }
  }
  return (
  <React.Fragment>
    <h1>{text}</h1>
    <button className='btn' onClick={handleClick}>
      Change title
    </button>
  </React.Fragment>);
};

export default UseStateBasics;
