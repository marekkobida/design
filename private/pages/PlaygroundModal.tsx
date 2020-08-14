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
      { id: '751888', w: '1718', h: '1080', alt: 'Lorem', thmb: '/FileHandler.ashx?FileID=751888&FormatID=41&TimeStamp=20181203104721', },
      { id: '751883', w: '1620', h: '1080', alt: '', thmb: '/FileHandler.ashx?FileID=751883&FormatID=41&TimeStamp=20181203104716', },
      { id: '754618', w: '1620', h: '1080', alt: '', thmb: '/FileHandler.ashx?FileID=754618&FormatID=41&TimeStamp=20181214135517', },
      { id: '751885', w: '1626', h: '1080', alt: 'Ipsum', thmb: '/FileHandler.ashx?FileID=751885&FormatID=41&TimeStamp=20181203104717', },
      { id: '751886', w: '1626', h: '1080', alt: '', thmb: '/FileHandler.ashx?FileID=751886&FormatID=41&TimeStamp=20181203104719', },
      { id: '751887', w: '717', h: '1080', alt: '', thmb: '/FileHandler.ashx?FileID=751887&FormatID=41&TimeStamp=20181203104720', },
      { id: '751889', w: '1620', h: '1080', alt: '', thmb: '/FileHandler.ashx?FileID=751889&FormatID=41&TimeStamp=20181203104721', },
      { id: '751890', w: '1509', h: '1080', alt: '', thmb: '/FileHandler.ashx?FileID=751890&FormatID=41&TimeStamp=20181203104723', },
      { id: '754615', w: '1718', h: '1080', alt: 'Niekedy iba', thmb: '/FileHandler.ashx?FileID=754615&FormatID=41&TimeStamp=20181214135440', },
      { id: '754616', w: '1920', h: '1080', alt: '', thmb: '/FileHandler.ashx?FileID=754616&FormatID=41&TimeStamp=20181214135453', },
      { id: '754617', w: '1920', h: '1080', alt: '', thmb: '/FileHandler.ashx?FileID=754617&FormatID=41&TimeStamp=20181214135506', },
      { id: '984910', w: '810', h: '1080', alt: '', thmb: '/FileHandler.ashx?FileID=984910&FormatID=41&TimeStamp=20200114100452', },
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
          {'Lorem Ypslum odór same gipsu est'}<br />sdsd
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
