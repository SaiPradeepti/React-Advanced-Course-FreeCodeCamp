import React, { useState, useEffect, useRef, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
import {reducer} from './reducer'

export const ACTIONS = {
  ADD_ITEM: 'add_item',
  NO_VALUE: 'no_value',
  CLOSE_MODAL: 'close_modal',
  REMOVE_ITEM: 'remove_item'
}
const defaultState = {
  people: '',
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
      dispatch({type: ACTIONS.ADD_ITEM, payload: { name: name }});
      setName('');
    }
    else{
      dispatch({type: ACTIONS.NO_VALUE});
    }
  }

  const closeModal = () => {
    dispatch({type: ACTIONS.CLOSE_MODAL});
  }

  useEffect(()=>{
    inputRef.current.focus();
  },[]);
  
  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal} />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} ref={inputRef}/>
        </div>
        <button type="submit">Add</button>
      </form>
      {
        state.people && (
          state.people.map(person => {
          const {id,name} = person;
          return <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={()=>{
              dispatch({type: ACTIONS.REMOVE_ITEM, payload: {id}})
            }}>remove</button>
          </div>
        })
        )
      }
    </>
  );
};

export default Index;
