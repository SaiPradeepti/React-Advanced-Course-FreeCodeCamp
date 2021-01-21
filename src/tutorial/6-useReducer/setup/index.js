import React, { useState, useEffect, useRef, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
const reducer = (state,action) => {
  console.log(state);
  
  switch(action.type){
    case ACTIONS.ADD_ITEM:
      const newPeopleList = [...state.people,{id:new Date().getTime().toString(),name:action.payload.name}];
      return {
        ...state,
        people: newPeopleList,
        isModalOpen: true,
        modalContent: "item added"
      };
    case ACTIONS.NO_VALUE:
      return{
        ...state,
        isModalOpen: true,
        modalContent: "please enter value"
      }
    default:
      throw new Error('No matching action type');
  }
}
const ACTIONS = {
  ADD_ITEM: 'add_item',
  NO_VALUE: 'no_value'
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
        state.people && (
          state.people.map(person => {
          const {id,name} = person;
          return <div key={id}>
            <h4>{name}</h4>
          </div>
        })
        )
      }
    </>
  );
};

export default Index;
