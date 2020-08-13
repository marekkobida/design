import Container from '../components/Container';
import Heading from '../components/Heading';
import Link from '../components/Link';
import Page from '@redredsk/pages/private/Page';
import React, { FocusEventHandler, useState, } from 'react';
import Text from '../components/Text';
import template from '@redredsk/pages/private/template';

// MODAL IMPORTS
import useModal from '../components/modal/Usemodal';
import Modal from '../components/modal/Modal';

class PlaygroundModal extends Page {
  constructor () {
    super(-2, 'PlaygroundModal');
  }


  modaltest1 () {
    const { isShowing, toggleModal,  } = useModal();
    return (
      <div
        onKeyUp={(e)=>{ if (e.which == 9) { e.preventDefault(); } }}
        onKeyDown={(e)=>{ if (e.which == 9) { e.preventDefault(); } }}
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
        onKeyUp={(e)=>{ if (e.which == 9) { e.preventDefault(); } }}
        onKeyDown={(e)=>{ if (e.which == 9) { e.preventDefault(); } }}

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
        <Heading size={1}>{this.name}</Heading>
        <Heading size={2}>{this.name}</Heading>
        <Heading size={3}>{this.name}</Heading>
        <Heading size={4}>{this.name}</Heading>
        <Heading size={5}>{this.name}</Heading>
        <Heading size={6}>{this.name}</Heading>

        <Link to="#">{this.name}</Link>
        <Text>{this.name}</Text>
        <this.modaltest1 />
       Lorep Gipsum
        <this.modaltest2 />
      </Container>
    );
  }

  template = template();
}

export default PlaygroundModal;
