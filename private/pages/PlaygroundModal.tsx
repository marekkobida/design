import Container from '../components/Container';
import Page from '@redredsk/pages/private/Page';
import React, { FocusEventHandler, useState, } from 'react';
import template from '@redredsk/pages/private/template';

// MODAL IMPORTS
import useModal from '../components/modal/Usemodal';
import Modal from '../components/modal/Modal';

class PlaygroundModal extends Page {
  constructor () {
    super(-2, 'Modal');
  }


  modaltest1 () {
    const { isShowing, toggleModal,  } = useModal();
    // avoid tab navigate away, if modal is open
    return (
      <div
        onKeyUp={(e)=>{ if (isShowing === true && e.which == 9) { e.preventDefault(); } }}
        onKeyDown={(e)=>{ if (isShowing === true && e.which == 9) { e.preventDefault(); } }}
      >
        <button className="button-default" onClick={toggleModal}>Show Modal</button>
        <Modal
          isShowing={isShowing}
          hide={toggleModal}
          content = {<>Nazdaaar jakozecoze sdsdsssd</>}
        />
      </div>
    );
  }

  modaltest2 () {
    const { isShowing, toggleModal, } = useModal();
    return (
      <div
        onKeyUp={(e)=>{ if (isShowing === true && e.which == 9) { e.preventDefault(); } }}
        onKeyDown={(e)=>{ if (isShowing === true && e.which == 9) { e.preventDefault(); } }}
      >
        <button className="button-default" onClick={toggleModal}>Show Modal</button>
        <Modal
          isShowing={isShowing}
          hide={toggleModal}
          content={<>Nazdaaar<br />v2<br />v2</>}
        />
      </div>
    );
  }


  element () {
    return (
      <Container>
        Huh ?

        <this.modaltest1 />
       Lorep Gipsumsddsd
        <this.modaltest2 />
      </Container>
    );
  }

  template = template();
}

export default PlaygroundModal;
