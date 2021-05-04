import React from "react";

const Modal: React.FC = ({ children }) => {
  return (
    <>
      <div className='fixed top-0 left-0 w-full h-full bg-workattack-dark bg-opacity-60 z-30'></div>
      <div className='fixed top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 z-40 rounded-lg bg-workattack-dark text-white shadow-xl'>
        {children}
      </div>
    </>
  );
};

export default Modal;
