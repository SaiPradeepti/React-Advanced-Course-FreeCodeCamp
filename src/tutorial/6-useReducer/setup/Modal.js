import React, { useEffect } from 'react';

const Modal = ({modalContent,closeModal}) => {
  useEffect(() => {
    const timeout = () => {
      setTimeout(()=>closeModal(),3000);
    }
    timeout();
    return () => {
      clearTimeout(timeout);
    }
  }, [])
  return <div className="modal">
    <p>{modalContent}</p>
  </div>;
};

export default Modal;
