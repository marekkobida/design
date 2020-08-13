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


  // TEST -DATA PRE IMG GALERIU
  modalGalery () {
    const { isShowing, toggleModal, stopTab, } = useModal();
    const sampleGalleryData = [
      'https://koala.sk/FileHandler.ashx?FileID=220554&amp;FormatID=41&amp;TimeStamp=20171123153913',
      'https://koala.sk/FileHandler.ashx?FileID=363700&amp;FormatID=41&amp;TimeStamp=20171123153913',
      'https://koala.sk/FileHandler.ashx?FileID=43558&amp;FormatID=41&amp;TimeStamp=20171123153913',
    ];
    return (
      <div onKeyUp={stopTab} onKeyDown={stopTab}>
        <button className="button-default" onClick={toggleModal}>Modal Galery</button>
        <Modal isShowing={isShowing} hide={toggleModal}>{sampleGalleryData}</Modal>
      </div>
    );
  }


  // MODAL 1
  modaltest1 () {
    const { isShowing, stopTab, toggleModal,  } = useModal();
    // avoid tab navigate away, if modal is open
    return (
      <div onKeyUp={stopTab} onKeyDown={stopTab}>
        <button className="button-default" onClick={toggleModal}>Modal Text 1</button>
        <Modal isShowing={isShowing} hide={toggleModal}>
          Lorem Ypslum odór same gipsu est
        </Modal>
      </div>
    );
  }

  // MODAL 2
  modaltest2 () {
    const { isShowing, stopTab, toggleModal, } = useModal();
    return (
      <div onKeyUp={stopTab} onKeyDown={stopTab}>
        <button className="button-default" onClick={toggleModal}>Modal Text 1</button>
        <Modal isShowing={isShowing} hide={toggleModal}>
          Nazdaaar<br />v2<br />v2
        </Modal>
      </div>
    );
  }


  element () {
    return (
      <Container>
        <this.modalGalery />
        <br /><br />
        <this.modaltest1 />
        <br /><br />
        <this.modaltest2 />
      </Container>
    );
  }

  template = template();
}

export default PlaygroundModal;
