import React, { useState, useEffect, useRef, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const Index = () => {
  const [name,setName] = useState('');
  const [people,setPeople] = useState(data);
  const [showModal,setShowModal] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name){
      setShowModal(true);
      const newPerson = {id: `${new Date().getTime().toString()}`, name}
      setPeople([...people,newPerson]);
      setName('');
    }
    else{
      setShowModal(true);
    }
  }

  useEffect(()=>{
    inputRef.current.focus();
  },[]);
  
  return (
    <>
      {showModal && <Modal />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} ref={inputRef}/>
        </div>
        <button type="submit">Add</button>
      </form>
      {
        people.map(person => {
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
