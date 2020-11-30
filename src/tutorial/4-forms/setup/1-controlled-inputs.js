import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const handleSubmit = (e) =>{
    console.log('hello world');
    e.preventDefault();   
  }
  // to handle forms place function on form or submit button
  // on form -> onSubmit event
  // on submit button -> onClick event
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input type="text" id="firstName" name="firstName"/>
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input type="email" id="email" name="email"/>
          </div>
          {/* <button className="btn" onClick={handleSubmit}>Add Person</button> */}
          <button className="btn">Add Person</button>
        </form>
      </article>   
    </>
  );
};

export default ControlledInputs;
