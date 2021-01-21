import React, { useState, useEffect, useRef, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
const reducer = (state,action) => {
  // console.log(state);
}
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: ''
}

const Index = () => {
  const [name,setName] = useState('');
  const [state,dispatch] = useReducer(reducer,defaultState);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name){
      
    }
    else{
      
    }
  }

  useEffect(()=>{
    inputRef.current.focus();
  },[]);
  
  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} ref={inputRef}/>
        </div>
        <button type="submit">Add</button>
      </form>
      {
        state.people.map(person => {
          const {id,name} = person;
          return <div key={id}>
            <h4>{name}</h4>
          </div>
        })
      }
    </>
  );
};

export default Index;
