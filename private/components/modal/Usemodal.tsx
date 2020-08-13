import { useState, } from 'react';

function useModal () {
  const [ isShowing, setIsShowing, ] = useState(false);

  function toggleModal () {
    setIsShowing(!isShowing);
  }

  function stopTab (e) {
    if (isShowing === true && e.which == 9) { e.preventDefault(); }
  }


  return { isShowing, stopTab, toggleModal, };
};

export default useModal;
